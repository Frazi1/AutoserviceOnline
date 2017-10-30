import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./modules/material/material.module";
import {RoutingModule} from "./modules/routing/routing.module";
import {ComponentsModule} from "./modules/components/components.module";
import {OrdersService} from "./services/orders/orders.service";
import {HttpModule} from "@angular/http";

// import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    ComponentsModule,
    HttpModule
    // OrdersService
  ],
  providers: [
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
