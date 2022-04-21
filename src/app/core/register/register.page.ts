import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  language: string;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private translate: TranslateService,
    private storage: StorageService
  ) {
    this.getLanguage();
  }

  ngOnInit() { }

  getLanguage() {
    this.storage.getString('language').then((data: any) => {
      if (data.value) {
        this.language = data.value;
        this.translate.setDefaultLang(this.language);
      } else {
        this.language = 'en';
        this.storage.setString('language', this.language);
        this.translate.setDefaultLang(this.language);
      }
    });
  }

  onSelectChange(selectedValue: any) {
    this.language = selectedValue.detail.value;
    this.translate.setDefaultLang(this.language);
    this.storage.setString('language', this.language);
  }

  async onRegister(email, password, passwordRepeat) {
    if (password.value === passwordRepeat.value) {
      try {
        const user = await this.authSvc.register(email.value, password.value);
        if (user) {
          console.log('User--->', user);
          const isVerified = this.authSvc.isEmailVerified(user);
          this.redirectUser(isVerified);
        }
      }
      catch (error) {
        console.log('Error-->', error);
      }
    } else {
      //write error code here
      console.log('error');
    }
  }

  private redirectUser(isVerified: boolean) {
    if (isVerified) {
      this.router.navigate(['mainscreen']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
