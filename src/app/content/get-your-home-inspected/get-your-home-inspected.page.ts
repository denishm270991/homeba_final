import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-get-your-home-inspected',
  templateUrl: './get-your-home-inspected.page.html',
  styleUrls: ['./get-your-home-inspected.page.scss'],
})
export class GetYourHomeInspectedPage implements OnInit {
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
