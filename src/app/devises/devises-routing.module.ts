import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevisesPage } from './devises.page';

const routes: Routes = [
  {
    path: '',
    component: DevisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisesPageRoutingModule {}
