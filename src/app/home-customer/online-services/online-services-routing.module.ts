import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineServicesPage } from './online-services.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineServicesPageRoutingModule {}
