import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {OrdersComponent} from '../../components/orders/orders.component';
import {MainComponent} from '../../components/main/main.component';

const routes = [
  {
    path: '',
    component: MainComponent
  },
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
