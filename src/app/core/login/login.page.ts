import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
import { User } from 'src/app/shared/user.interface';
import { UserI } from 'src/app/interfaces/user';
import { Auth2Service } from 'src/app/services/auth2.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  language: string;
  isSpanish: boolean;
  form: FormGroup;
  submitted: boolean;

  constructor(
    private router: Router,
    private authSvc: AuthService,
    private auth2Service: Auth2Service,
    private translate: TranslateService,
    private storage: StorageService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
  ) {
    this.isFirsTime();
    this.getLanguage();
    this.isFirstTimeOnLogin();
    this.submitted = false;
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  isFirsTime() {
    this.storage.getString('firstime').then((data: any) => {
      if (!data.value) {
        this.storage.setString('firstime', 'false');
        this.router.navigate(['/welcome']);
      }
    });
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
      this.isSpanish = this.language === 'en' ? false : true;
    });
  }

  isFirstTimeOnLogin() {
    this.storage.getString('firstimeonlogin').then((data: any) => {
      if (!data.value) {
        this.storage.setString('firstimeonlogin', 'false');
      } else {
        this.router.navigate(['/mainscreen']);
      }
    });
  }

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
 
  ngOnInit() { }

  onSelectChange(selectedValue: any) {
    this.language = selectedValue.detail.value;
    this.translate.setDefaultLang(this.language);
    this.storage.setString('language', this.language);
    this.isSpanish = this.language === 'en' ? false : true;
  }

  get f() { return this.form.controls }

  async onLogin() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    var values = this.form.value;

    try {
      const user = await this.authSvc.login(values.email, values.password);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified, user);
      } else {
        if (this.language === 'en') {
          this.toastService.displayToastError('RESPONSE', 'Please check your internet connection or login credentials.', 'Close');
        } else {
          this.toastService.displayToastError('RESPUESTA', 'Por favor verifique su conexión a internet o sus credenciales de autenticación.', 'Cerrar');
        }
      }
    } catch (error) {
      if (this.language === 'en') {
        this.toastService.displayToastError('RESPONSE', 'Oops, something happened, please check your internet connection or try again later.', 'Close');
      } else {
        this.toastService.displayToastError('RESPUESTA', 'Oops, algo ha ocurrido, compruebe su conexión a internet o inténtelo más tarde.', 'Cerrar');
      }
    }
  }

  private redirectUser(isVerified: boolean, user: User) {
    if (isVerified) {
      let uid: string;
      this.storage.getString('hbaUid').then((res: any) => {
        if (res.value) {
          uid = res.value;
          this.storage.getObject('hbaUser').then((dataUser: any) => {
            let user = JSON.parse(dataUser);            
            const data: UserI = {
              uid: uid,
              email: user.email,
              fullName: user.fullName,
              mobileNumber: user.mobileNumber
            };
            this.auth2Service.addUser(data);
            this.router.navigate(['/mainscreen']);
          });
        } else {
          //todo hay que ir a firebase y encontrar ese usuario con ese uid
          this.auth2Service.findUser(user.uid);
          this.router.navigate(['/mainscreen']);
        }
      });
    } else {
      this.router.navigate(['/verify-email']);
    }
  }

}
