import {NgModule} from '@angular/core';
import {OrdersComponent} from './orders/orders.component';
import {NavComponent} from './nav/nav.component';
import {CommonModule} from '@angular/common';
import {PartialsModule} from '../partials/partials.module';
import {MaterialModule} from '../modules/material/material.module';
import { AddOrderComponent } from './add-order/add-order.component';
import {RoutingModule} from '../modules/routing/routing.module';
import {ServicesModule} from "../services/services.module";

@NgModule({
  declarations: [
    OrdersComponent,
    NavComponent,
    AddOrderComponent
  ],
  exports: [
    OrdersComponent,
    NavComponent,
    AddOrderComponent
  ],
  imports: [
    CommonModule,
    PartialsModule,
    MaterialModule,
    RoutingModule,
    ServicesModule
  ]
})
export class ComponentsModule {
}
