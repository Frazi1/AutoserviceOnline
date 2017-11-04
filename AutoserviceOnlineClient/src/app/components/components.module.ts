import {NgModule} from '@angular/core';
import {MainComponent} from "./main/main.component";
import {OrdersComponent} from './orders/orders.component';
import {NavComponent} from './nav/nav.component';

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
  ]
})
export class ComponentsModule {
}
