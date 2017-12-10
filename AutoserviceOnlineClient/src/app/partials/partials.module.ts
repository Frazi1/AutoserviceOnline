import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditOrderComponent} from './edit-order/edit-order.component';
import {MaterialModule} from '../modules/material/material.module';
import {FormsModule} from '@angular/forms';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {EditCarComponent} from './edit-car/edit-car.component';
import {EditTaskComponent} from './edit-task/edit-task.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    EditOrderComponent,
    EditCustomerComponent,
    EditCarComponent,
    EditTaskComponent
  ],
  declarations: [EditOrderComponent,
    EditCustomerComponent,
    EditCarComponent,
    EditTaskComponent
  ]
})
export class PartialsModule {
}
