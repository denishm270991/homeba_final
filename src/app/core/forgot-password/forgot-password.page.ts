import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  language: string;
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private translate: TranslateService,
    private storage: StorageService
  ) {
    this.getLanguage();
  }

  ngOnInit() {
  }
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

  async onResetPassword(email) {
    try {
      await this.authSvc.resetPaswword(email.value);
      this.router.navigate(['login']);
    }
    catch (error) {
      console.log('Error --->', error);
    }
  }
}
