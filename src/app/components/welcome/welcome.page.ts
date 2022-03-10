import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  language: string;

  constructor(private router: Router) {
    this.language = 'es';
  }

  ngOnInit() {
  }

  showSignup() {
    console.log('yes');
    this.router.navigate(['/signup']);
  }

}
