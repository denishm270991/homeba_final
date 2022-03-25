import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  language: string;

  constructor(private authSvc: AuthService, private router: Router, private translate: TranslateService) {
    this.language = 'en';
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }
  async onRegister(email, password, passwordRepeat) {
    if(password.value === passwordRepeat.value ){
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
    }else{
      //write error code here
      console.log('error');
    }
  }
  onSelectChange(selectedValue: any) {
    this.translate.setDefaultLang(selectedValue.detail.value);
  }
  private redirectUser(isVerified: boolean) {
    if (isVerified) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
