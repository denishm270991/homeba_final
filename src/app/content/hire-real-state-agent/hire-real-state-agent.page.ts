import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-hire-real-state-agent',
  templateUrl: './hire-real-state-agent.page.html',
  styleUrls: ['./hire-real-state-agent.page.scss'],
})
export class HireRealStateAgentPage implements OnInit {

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
