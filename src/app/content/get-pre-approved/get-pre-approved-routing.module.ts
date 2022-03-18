import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetPreApprovedPage } from './get-pre-approved.page';

const routes: Routes = [
  {
    path: '',
    component: GetPreApprovedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetPreApprovedPageRoutingModule {}
