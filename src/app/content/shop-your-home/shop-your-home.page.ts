import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-shop-your-home',
  templateUrl: './shop-your-home.page.html',
  styleUrls: ['./shop-your-home.page.scss'],
})
export class ShopYourHomePage implements OnInit {
  language: string;

  constructor(private translate: TranslateService) {
    this.language = "en";
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  onSelectChange(selectedValue: any) {
    this.translate.setDefaultLang(selectedValue.detail.value);
  }
}
