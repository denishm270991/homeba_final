import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloseYourNewHomePage } from './close-your-new-home.page';

const routes: Routes = [
  {
    path: '',
    component: CloseYourNewHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloseYourNewHomePageRoutingModule {}
