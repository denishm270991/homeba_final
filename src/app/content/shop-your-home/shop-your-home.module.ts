import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopYourHomePageRoutingModule } from './shop-your-home-routing.module';

import { ShopYourHomePage } from './shop-your-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopYourHomePageRoutingModule
  ],
  declarations: [ShopYourHomePage]
})
export class ShopYourHomePageModule {}
