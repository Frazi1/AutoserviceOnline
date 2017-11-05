import {OrdersComponent} from '../../components/orders/orders.component';
import {MainComponent} from '../../components/main/main.component';
import {Routes} from '@angular/router';
import {STATES} from './states';
import {AddOrderComponent} from '../../components/add-order/add-order.component';

export const routes: Routes = [
  {
    path: STATES.STATE_MAIN,
    component: MainComponent,
  },
  {
    path: STATES.STATE_ORDERS,
    component: OrdersComponent
  },
  {
    path: STATES.STATE_ADD_NEW_ORDER,
    component: AddOrderComponent
  }
];
