import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
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
    private translate: TranslateService
  ) {
    this.language = "en";
    translate.setDefaultLang('en');
  }

  ngOnInit() {
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

  onSelectChange(selectedValue: any) {
    this.translate.setDefaultLang(selectedValue.detail.value);
  }
}
