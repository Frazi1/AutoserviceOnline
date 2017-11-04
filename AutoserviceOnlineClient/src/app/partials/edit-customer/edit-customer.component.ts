import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../helpers/classes/models/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  get customer(): Customer {
    return this._customer;
  }

  @Input() set customer(value: Customer) {
    this._customer = value;
  }

  private _customer: Customer;
  constructor() { }

  ngOnInit() {
  }

}
