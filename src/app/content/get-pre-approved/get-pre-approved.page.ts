import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-pre-approved',
  templateUrl: './get-pre-approved.page.html',
  styleUrls: ['./get-pre-approved.page.scss'],
})
export class GetPreApprovedPage implements OnInit {

  language: string;
  form1: FormGroup;
  form2: FormGroup;
  submitted1: boolean;
  submitted2: boolean;
  addPerson: boolean;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private formBuilder: FormBuilder
  ) {
    this.language = "en";
    translate.setDefaultLang('en');
    this.submitted1 = false;
    this.submitted2 = false;
    this.addPerson = false;

    this.form1 = this.formBuilder.group({
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      creditScore: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      monthlyIncome: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      monthlyDebts: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
    this.form2 = this.formBuilder.group({
      zipCode2: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      creditScore2: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      monthlyIncome2: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      monthlyDebts2: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  ngOnInit() { }

  onSelectChange(selectedValue: any) {
    this.translate.setDefaultLang(selectedValue.detail.value);
  }

  toShowMainScree() {
    this.router.navigate(['/mainscreen']);
  }

  get f1() { return this.form1.controls }
  get f2() { return this.form2.controls }

  onSubmit() {
    this.submitted1 = true;
    this.addPerson ? this.submitted2 = true : this.submitted2 = false;

    if (this.form1.invalid) {
      return;
    }
    if (this.addPerson) {
      if (this.form2.invalid) {
        return;
      }
    }
    // TODO PROCESAR DATOS
  }

  addPersonShowForm() {
    this.addPerson = !this.addPerson;
    if (!this.addPerson) {
      this.form2.reset();
    }
  }
}
