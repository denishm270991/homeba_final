import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  language: string;
  classFacebook: string;
  classGoogle: string;
    
  constructor(private translate: TranslateService) {
    this.language = "en";
    translate.setDefaultLang('en');
    this.classFacebook = 'circle-content inactive';
    this.classGoogle = 'circle-content inactive';
  }

  ngOnInit() {
  }

  onSelectChange(selectedValue: any) {
    this.translate.setDefaultLang(selectedValue.detail.value);
  }

}
