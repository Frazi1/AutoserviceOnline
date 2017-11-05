import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    // RouterModule.forChild(routes),
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule {
}
