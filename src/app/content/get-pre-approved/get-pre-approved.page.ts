import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-get-pre-approved',
  templateUrl: './get-pre-approved.page.html',
  styleUrls: ['./get-pre-approved.page.scss'],
})
export class GetPreApprovedPage implements OnInit {

  language: string;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.language = "en";
    translate.setDefaultLang('en');
  }

  ngOnInit() { }

  onSelectChange(selectedValue: any) {
    this.translate.setDefaultLang(selectedValue.detail.value);
  }

  toShowMainScree(){
    this.router.navigate(['/mainscreen']);
  }
}
