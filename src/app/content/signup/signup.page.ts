import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  language: string;
  // classFacebook: string;
  // classGoogle: string;
  form: FormGroup;
  submitted: boolean;

  constructor(
    private translate: TranslateService,
    private storage: StorageService,
    private formBuilder: FormBuilder,
  ) {
    this.getLanguage();
    this.submitted = false;
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
    });
  }

  get f() { return this.form.controls }

  onSubmit() {
    this.submitted = true;
    console.log(this.f);
    if (this.form.invalid) {
      return;
    }
    
    // todo procesar los datos del formulario
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

  classLFN: string = 'normal';
  classLMN: string = 'normal';
  classLE: string = 'normal';
  classLP: string = 'normal';
  classLRP: string = 'normal';

  customClickFullName() {
    this.classLFN = 'normal-clicked-data';
    this.updateStyleMovileNumber();
    this.updateStyleEmail();
    this.updateStylePassword();
    this.updateStyleRepeatPassword();
  }

  customClickMovileNumber() {
    this.classLMN = 'normal-clicked-data';
    this.updateStyleFullName();
    this.updateStyleEmail();
    this.updateStylePassword();
    this.updateStyleRepeatPassword();
  }

  customClickEmail() {
    this.classLE = 'normal-clicked-data';
    this.updateStyleFullName();
    this.updateStyleMovileNumber();
    this.updateStylePassword();
    this.updateStyleRepeatPassword();
  }

  customClickPassword() {
    this.classLP = 'normal-clicked-data';
    this.updateStyleFullName();
    this.updateStyleMovileNumber();
    this.updateStyleEmail();
    this.updateStyleRepeatPassword();
  }

  customClickRepeatPassword() {
    this.classLRP = 'normal-clicked-data';
    this.updateStyleFullName();
    this.updateStyleMovileNumber();
    this.updateStyleEmail();
    this.updateStylePassword();
  }

  updateStyleFullName() {
    if (this.form.controls['fullName'].value === "") {
      this.classLFN = 'normal';
    } else {
      this.classLFN = 'normal-clicked-no-data';
    }
  }

  updateStyleEmail() {
    if (this.form.controls['email'].value === "") {
      this.classLE = 'normal';
    } else {
      this.classLE = 'normal-clicked-no-data';
    }
  }

  updateStyleMovileNumber() {
    if (this.form.controls['mobileNumber'].value === "") {
      this.classLMN = 'normal';
    } else {
      this.classLMN = 'normal-clicked-no-data';
    }
  }

  updateStylePassword() {
    if (this.form.controls['password'].value === "") {
      this.classLP = 'normal';
    } else {
      this.classLP = 'normal-clicked-no-data';
    }
  }

  updateStyleRepeatPassword() {
    if (this.form.controls['repeatPassword'].value === "") {
      this.classLRP = 'normal';
    } else {
      this.classLRP = 'normal-clicked-no-data';
    }
  }
}
