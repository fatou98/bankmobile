import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'home-customer',
    loadChildren: () => import('./home-customer/home-customer.module').then( m => m.HomeCustomerPageModule)
  },
  {
    path: 'devises',
    loadChildren: () => import('./devises/devises.module').then( m => m.DevisesPageModule)
  },
  {
    path: 'conversion',
    loadChildren: () => import('./conversion/conversion.module').then( m => m.ConversionPageModule)
  },
  {
    path: 'simulation',
    loadChildren: () => import('./simulation/simulation.module').then( m => m.SimulationPageModule)
  },
  {
    path: 'agence',
    loadChildren: () => import('./agence/agence.module').then( m => m.AgencePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
