import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevisesPageRoutingModule } from './devises-routing.module';

import { DevisesPage } from './devises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevisesPageRoutingModule
  ],
  declarations: [DevisesPage]
})
export class DevisesPageModule {}
