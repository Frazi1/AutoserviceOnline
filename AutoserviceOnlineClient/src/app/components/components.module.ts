import {NgModule} from '@angular/core';
import {OrdersComponent} from './orders/orders.component';
import {NavComponent} from './nav/nav.component';
import {CommonModule} from '@angular/common';
import {PartialsModule} from '../partials/partials.module';
import {MaterialModule} from '../modules/material/material.module';
import { AddOrderComponent } from './add-order/add-order.component';
import {RoutingModule} from '../modules/routing/routing.module';
import {ServicesModule} from "../services/services.module";
import { TasksComponent } from './tasks/tasks.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    OrdersComponent,
    NavComponent,
    AddOrderComponent,
    TasksComponent
  ],
  exports: [
    OrdersComponent,
    NavComponent,
    AddOrderComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    PartialsModule,
    MaterialModule,
    RoutingModule,
    ServicesModule,
    FormsModule
  ]
})
export class ComponentsModule {
}
