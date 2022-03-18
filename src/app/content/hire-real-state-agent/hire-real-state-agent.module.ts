import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HireRealStateAgentPageRoutingModule } from './hire-real-state-agent-routing.module';

import { HireRealStateAgentPage } from './hire-real-state-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HireRealStateAgentPageRoutingModule
  ],
  declarations: [HireRealStateAgentPage]
})
export class HireRealStateAgentPageModule {}
