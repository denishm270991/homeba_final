import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreApprovedResultPage } from './pre-approved-result.page';

const routes: Routes = [
  {
    path: '',
    component: PreApprovedResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreApprovedResultPageRoutingModule {}
