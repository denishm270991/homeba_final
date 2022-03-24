import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HireRealStateAgentPage } from './hire-real-state-agent.page';

const routes: Routes = [
  {
    path: '',
    component: HireRealStateAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HireRealStateAgentPageRoutingModule {}
