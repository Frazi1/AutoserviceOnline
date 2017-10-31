import { NgModule } from '@angular/core';
import {DataServiceBase} from '../helpers/classes/services/data-service-base';
import {JsonWorkmanConverter} from '../helpers/classes/converters/json-workman-converter';
import {JsonTaskConverter} from '../helpers/classes/converters/json-task-converter';
import {JsonOrderConverter} from '../helpers/classes/converters/json-order-converter';
import {JsonCarConverter} from '../helpers/classes/converters/json-car-converter';
import {CarsService} from '../services/cars.service';
import {WorkmenService} from '../services/workmen.service';
import {TasksService} from '../services/tasks.service';
import {CustomersService} from '../services/customers.service';
import {OrdersService} from '../services/orders.service';
import {JsonCustomerConverter} from '../helpers/classes/converters/json-customer-converter';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [
    DataServiceBase,
    OrdersService,
    CustomersService,
    TasksService,
    WorkmenService,
    CarsService,
    JsonCarConverter,
    JsonOrderConverter,
    JsonTaskConverter,
    JsonWorkmanConverter,
    JsonCustomerConverter
  ]
})
export class ServicesModule { }
