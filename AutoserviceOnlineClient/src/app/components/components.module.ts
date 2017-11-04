import {NgModule} from '@angular/core';
import {MainComponent} from "./main/main.component";
import {OrdersComponent} from './orders/orders.component';
import {NavComponent} from './nav/nav.component';
import {CommonModule} from '@angular/common';
import {PartialsModule} from '../partials/partials.module';
import {MaterialModule} from '../modules/material/material.module';

@NgModule({
  declarations: [
    MainComponent,
    OrdersComponent,
    NavComponent
  ],
  exports: [
    MainComponent,
    OrdersComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    PartialsModule,
    MaterialModule
  ]
})
export class ComponentsModule {
}
