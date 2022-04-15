import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
import { User } from 'src/app/shared/user.interface';
import { UserI } from 'src/app/interfaces/user';
import { Auth2Service } from 'src/app/services/auth2.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  language: string;
  classFacebook: string;
  classGoogle: string;

  constructor(
    private router: Router,
    private authSvc: AuthService,
    private auth2Service: Auth2Service,
    private translate: TranslateService,
    private storage: StorageService
  ) {
    this.isFirsTime();
    this.getLanguage();
    this.isLogged();
    // this.classFacebook = 'circle-content inactive';
    // this.classGoogle = 'circle-content inactive';

  }

  isLogged() {
    this.storage.getString('hbaUid').then((data: any) => {
      if (data.value) {
        this.router.navigate(['/mainscreen']);
      }
    })
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

  isFirsTime() {
    this.storage.getString('firstime').then((data: any) => {
      console.log('data.value', data);
      if (!data.value) {
        this.storage.setString('firstime', 'false');
        this.router.navigate(['/welcome']);
      }
    });
  }
  onSelectChange(selectedValue: any) {
    this.language = selectedValue.detail.value;
    this.translate.setDefaultLang(this.language);
    this.storage.setString('language', this.language);
  }

  // ionViewWillEnter() {
  //   this.getCurrentState();
  // }

  // async getCurrentState() {
  //   const result = await Plugins.FacebookLogin.getCurrentAccessToken();
  //   try {
  //     console.log(result);
  //     if (result && result.accessToken) {
  //       const user = { token: result.accessToken.token, userId: result.accessToken.userId };
  //       const navigationExtras: NavigationExtras = {
  //         queryParams: {
  //           userinfo: JSON.stringify(user)
  //         }
  //       };
  //       this.router.navigate(['/mainscreen'], navigationExtras);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // async signIn(): Promise<void> {
  //   this.classFacebook = 'circle-content active';
  //   const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];

  //   const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
  //   if (result && result.accessToken) {
  //     const user = { token: result.accessToken.token, userId: result.accessToken.userId };
  //     const navigationExtras: NavigationExtras = {
  //       queryParams: {
  //         userinfo: JSON.stringify(user)
  //       }
  //     };
  //     this.router.navigate(['/mainscreen'], navigationExtras);
  //   }
  // }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified, user);
      }
    }
    catch (error) {
      console.log('Error---->', error);
    }
  }

  private redirectUser(isVerified: boolean, user: User) {
    if (isVerified) {
      this.storage.getString('hbaUid').then((data: any) => {
        if (data.value) {
          this.storage.getString('hbaUid').then((res => {
            if (res.value) {
              this.storage.getObject('hbaUser').then((dataUser: any) => {
                let userData = JSON.parse(dataUser);
                const data: UserI = {
                  uid: res.value,
                  email: userData.email,
                  fullName: userData.fullName,
                  mobileNumber: userData.mobileNumber
                };
                this.auth2Service.addUser(data);
                this.router.navigate(['/mainscreen']);
              });
            }
          }));

        }
      });
    } else {
      this.router.navigate(['/verify-email']);
    }
  }

  // async onLoginGoogle() {
  //   this.classGoogle = 'circle-content active';
  //   try {
  //     const user = await this.authSvc.loginGoogle();
  //     if (user) {
  //       const isVerified = this.authSvc.isEmailVerified(user);
  //       this.redirectUser(isVerified);
  //       console.log(user);
  //     }
  //   }
  //   catch (error) {
  //     console.log('Error-->', error);
  //   }
  // }


}
