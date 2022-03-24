import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-close-your-new-home',
  templateUrl: './close-your-new-home.page.html',
  styleUrls: ['./close-your-new-home.page.scss'],
})
export class CloseYourNewHomePage implements OnInit {
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
