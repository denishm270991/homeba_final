import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {
  language: string;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private emailComposer: EmailComposer
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
    let email = {
      to: 'denishm270991@gmail.com',
      cc: 'denishm910927@gmail.com',
      // attachments: [
      //   'file://img/logo.png',
      //   'res://icon.png',
      //   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      //   'file://README.pdf'
      // ],
      subject: 'Cordova Email',
      body: 'Hello, this is functione',
      isHtml: true
    }
    
    // Send a text message using default options
    this.emailComposer.open(email);
  }

  toShowChat(){
    this.router.navigate(['/chat']);
  }

}
