import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getCurrentState();
  }
  async getCurrentState() {
    const result = await Plugins.FacebookLogin.getCurrentAccessToken();
    try {
      console.log(result);
      if (result && result.accessToken) {
        const user = { token: result.accessToken.token, userId: result.accessToken.userId }
        const navigationExtras: NavigationExtras = {
          queryParams: {
            userinfo: JSON.stringify(user)
          }
        };
        this.router.navigate(['/home'], navigationExtras);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async signIn(): Promise<void> {
    const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];

    const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    if (result && result.accessToken) {
      const user = { token: result.accessToken.token, userId: result.accessToken.userId };
      const navigationExtras: NavigationExtras = {
        queryParams: {
          userinfo: JSON.stringify(user)
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    }
  }

}
