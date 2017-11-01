import {NgModule} from '@angular/core';
import {MainComponent} from "../components/main/main.component";
import {OrdersService} from "../services/load-data-services/orders.service";

@NgModule({
  imports: [
    // OrdersService
  ],
  declarations: [
    MainComponent,
  ],
  // providers: [
  //   OrdersService
  // ]
})
export class ComponentsModule {
}
