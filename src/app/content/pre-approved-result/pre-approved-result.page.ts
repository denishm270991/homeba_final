import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.result = params.result;
    });
    this.language = 'en';
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  onSelectChange(selectedValue: any) {
    console.log('enter here');
    this.translate.setDefaultLang(selectedValue.detail.value);
  }

}
