import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetYourHomeInspectedPage } from './get-your-home-inspected.page';

const routes: Routes = [
  {
    path: '',
    component: GetYourHomeInspectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetYourHomeInspectedPageRoutingModule {}
