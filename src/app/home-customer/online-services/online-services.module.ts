import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineServicesPageRoutingModule } from './online-services-routing.module';

import { OnlineServicesPage } from './online-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineServicesPageRoutingModule
  ],
  declarations: [OnlineServicesPage]
})
export class OnlineServicesPageModule {}
