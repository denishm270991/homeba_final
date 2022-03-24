import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopYourHomePage } from './shop-your-home.page';

const routes: Routes = [
  {
    path: '',
    component: ShopYourHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopYourHomePageRoutingModule {}
