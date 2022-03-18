import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreApprovedResultPageRoutingModule } from './pre-approved-result-routing.module';

import { PreApprovedResultPage } from './pre-approved-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreApprovedResultPageRoutingModule
  ],
  declarations: [PreApprovedResultPage]
})
export class PreApprovedResultPageModule {}
