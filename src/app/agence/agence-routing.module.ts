import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencePage } from './agence.page';

const routes: Routes = [
  {
    path: '',
    component: AgencePage
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencePageRoutingModule {}
