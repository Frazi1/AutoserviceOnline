import {OrdersComponent} from '../../components/orders/orders.component';
import {MainComponent} from '../../components/main/main.component';
import {Routes} from '@angular/router';
import {STATES} from './states';

export const routes: Routes = [
  {
    path: STATES.STATE_MAIN,
    component: MainComponent,
  },
  {
    path: STATES.STATE_ORDERS,
    component: OrdersComponent
  }
];
