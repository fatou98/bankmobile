import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCustomerPage } from './home-customer.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCustomerPage
  },
  {
    path: 'balance',
    loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'recharge',
    loadChildren: () => import('./recharge/recharge.module').then( m => m.RechargePageModule)
  },
  {
    path: 'online-services',
    loadChildren: () => import('./online-services/online-services.module').then( m => m.OnlineServicesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCustomerPageRoutingModule {}
