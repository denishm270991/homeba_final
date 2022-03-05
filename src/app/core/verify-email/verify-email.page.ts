import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs';
import { Component, OnDestroy} from '@angular/core';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnDestroy {
  user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) { }


  async onSendEmail(): Promise<void> {
    try{
      await this.authSvc.sendVerificationEmail();
    }
    catch(error){
      console.log('Error----->', error);
    }
  }
  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}
