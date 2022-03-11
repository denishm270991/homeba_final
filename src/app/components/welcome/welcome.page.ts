import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  language: string;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.language = 'es';
    translate.setDefaultLang('es');
  }

  ngOnInit() { }

  showSignup() {
    console.log('yes');
    this.router.navigate(['/signup']);
  }

  onSelectChange(selectedValue: any) {
    this.translate.setDefaultLang(selectedValue.detail.value);
  }
}
