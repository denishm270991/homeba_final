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
    this.router.navigate(['/get-pre-approved']);
  }

  toShowEstateAgent(){
    this.router.navigate(['/hire-real-state-agent']);
  }

  toShowYourHome(){
    this.router.navigate(['/shop-your-home']);
  }

  toShowHomeInspected(){
    this.router.navigate(['/get-your-home-inspected']);
  }

  toShowNewHome(){
    this.router.navigate(['/close-your-new-home']);
  }

  requestCallBack(){
    console.log('click buttom request to call');
  }

  toShowChat(){
    this.router.navigate(['/chat']);
  }
}
