import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MainComponent} from "../../components/main/main.component";
import {OrdersComponent} from '../../components/orders/orders.component';

const routes = [
  {
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule {
}
