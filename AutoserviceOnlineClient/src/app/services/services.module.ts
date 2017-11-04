import {NgModule} from '@angular/core';
import {DataServiceBase} from './data-service-base';
import {JsonWorkmanConverter} from '../helpers/classes/converters/json-workman-converter';
import {JsonTaskConverter} from '../helpers/classes/converters/json-task-converter';
import {JsonOrderConverter} from '../helpers/classes/converters/json-order-converter';
import {JsonCarConverter} from '../helpers/classes/converters/json-car-converter';
import {CarsService} from './load-data-services/cars.service';
import {WorkmenService} from './load-data-services/workmen.service';
import {TasksService} from './load-data-services/tasks.service';
import {CustomersService} from './load-data-services/customers.service';
import {OrdersService} from './load-data-services/orders.service';
import {JsonCustomerConverter} from '../helpers/classes/converters/json-customer-converter';

@NgModule({
  imports: [],
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
export class ServicesModule {
}
