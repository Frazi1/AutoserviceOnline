import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  imports: [
    // RouterModule.forChild(routes),
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule {
}
