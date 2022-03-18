import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetPreApprovedPageRoutingModule } from './get-pre-approved-routing.module';

import { GetPreApprovedPage } from './get-pre-approved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetPreApprovedPageRoutingModule
  ],
  declarations: [GetPreApprovedPage]
})
export class GetPreApprovedPageModule {}
