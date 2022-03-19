import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pre-approved-result',
  templateUrl: './pre-approved-result.page.html',
  styleUrls: ['./pre-approved-result.page.scss'],
})
export class PreApprovedResultPage implements OnInit {

  result: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.result = params.result;
    });
  }

  ngOnInit() {
  }

}
