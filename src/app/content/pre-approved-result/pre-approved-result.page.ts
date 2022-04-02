import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-pre-approved-result',
  templateUrl: './pre-approved-result.page.html',
  styleUrls: ['./pre-approved-result.page.scss'],
})
export class PreApprovedResultPage implements OnInit {

  result: string;
  language: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private storage: StorageService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.result = params.result;
    });
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
