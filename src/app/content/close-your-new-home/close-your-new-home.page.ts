import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-close-your-new-home',
  templateUrl: './close-your-new-home.page.html',
  styleUrls: ['./close-your-new-home.page.scss'],
})
export class CloseYourNewHomePage implements OnInit {
  language: string;

  constructor(
    private translate: TranslateService,
    private storage: StorageService
  ) {
    this.getLanguage();
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

  onSelectChange(selectedValue: any) {
    this.language = selectedValue.detail.value;
    this.translate.setDefaultLang(this.language);
    this.storage.setString('language', this.language);
  }

}
