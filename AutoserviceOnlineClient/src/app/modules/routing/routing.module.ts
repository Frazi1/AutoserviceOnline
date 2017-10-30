import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MainComponent} from "../../components/main/main.component";

const routes = [
  {
    path: 'orders',
    component: MainComponent
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
