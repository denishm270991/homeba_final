import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/user.interface';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnDestroy {
  user$: Observable<User> = this.authSvc.afAuth.user;
  language: string;

  constructor(
    private authSvc: AuthService,
    private translate: TranslateService,
    private storage: StorageService
  ) {
    this.getLanguage();
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

  async onSendEmail(): Promise<void> {
    try {
      await this.authSvc.sendVerificationEmail();
    }
    catch (error) {
      console.log('Error----->', error);
    }
  }

  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}
