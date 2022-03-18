import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloseYourNewHomePageRoutingModule } from './close-your-new-home-routing.module';

import { CloseYourNewHomePage } from './close-your-new-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloseYourNewHomePageRoutingModule
  ],
  declarations: [CloseYourNewHomePage]
})
export class CloseYourNewHomePageModule {}
