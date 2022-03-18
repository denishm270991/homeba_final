import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {
  language: string;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { 
    this.language = "en";
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  onSelectChange(selectedValue: any) {
    this.translate.setDefaultLang(selectedValue.detail.value);
  }

  toShowApproved(){
    console.log('yes');
  }

  toShowEstateAgent(){
    console.log('yes');
  }

  toShowYourHome(){
    console.log('yes');
  }

  toShowHomeInspected(){
    console.log('yes');
  }

  toShowNewHome(){
    console.log('yes');
  }

  requestCallBack(){
    console.log('yes');
  }

  toShowChat(){
    this.router.navigate(['/chat']);
  }
}
