import {OrdersComponent} from '../../components/orders/orders.component';
import {Routes} from '@angular/router';
import {STATES} from './states';
import {AddOrderComponent} from '../../components/add-order/add-order.component';
import {TasksComponent} from '../../components/tasks/tasks.component';

export const routes: Routes = [
  {
    path: STATES.STATE_MAIN,
    component: OrdersComponent,
  },
  {
    path: STATES.STATE_ORDERS,
    component: OrdersComponent
  },
  {
    path: STATES.STATE_ADD_NEW_ORDER,
    component: AddOrderComponent
  },
  {
    path: STATES.STATE_TASKS,
    component: TasksComponent
  }
];
