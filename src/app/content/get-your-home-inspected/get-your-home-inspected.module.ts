import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetYourHomeInspectedPageRoutingModule } from './get-your-home-inspected-routing.module';

import { GetYourHomeInspectedPage } from './get-your-home-inspected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetYourHomeInspectedPageRoutingModule
  ],
  declarations: [GetYourHomeInspectedPage]
})
export class GetYourHomeInspectedPageModule {}
