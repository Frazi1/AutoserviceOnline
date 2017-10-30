import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./modules/material/material.module";
import {RoutingModule} from "./modules/routing/routing.module";
import {ComponentsModule} from "./modules/components/components.module";
import {OrdersService} from "./services/orders.service";
import {HttpModule} from "@angular/http";
import {CustomersService} from './services/customers.service';
import {TasksService} from './services/tasks.service';
import {WorkmenService} from './services/workmen.service';
import {CarsService} from './services/cars.service';
import {JsonCarConverter} from './helpers/classes/converters/json-car-converter';
import {JsonOrderConverter} from './helpers/classes/converters/json-order-converter';
import {JsonTaskConverter} from './helpers/classes/converters/json-task-converter';
import {JsonWorkmanConverter} from './helpers/classes/converters/json-workman-converter';
import {DataServiceBase} from './helpers/classes/services/data-service-base';
import {JsonModelConverterBase} from './helpers/interfaces/json-model-converter-base';
import {Order} from './helpers/classes/models/order';
import {Data} from '@angular/router';

// import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    ComponentsModule,
    HttpModule
  ],
  providers: [
    OrdersService,
    CustomersService,
    TasksService,
    WorkmenService,
    CarsService,
    JsonCarConverter,
    JsonOrderConverter,
    JsonTaskConverter,
    JsonWorkmanConverter,
    DataServiceBase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
