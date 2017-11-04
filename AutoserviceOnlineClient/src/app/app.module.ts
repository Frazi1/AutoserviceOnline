import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./modules/material/material.module";
import {RoutingModule} from "./modules/routing/routing.module";
import {ComponentsModule} from "./modules/components.module";
import {HttpModule} from "@angular/http";
import {ServicesModule} from './modules/services.module';

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
    HttpModule,
    ServicesModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
