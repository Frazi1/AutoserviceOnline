import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../helpers/classes/models/order';
import {OrdersService} from "../../services/load-data-services/orders.service";
import {CustomersService} from "../../services/load-data-services/customers.service";
import {Customer} from "../../helpers/classes/models/customer";

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  private _isEditing: boolean;
  private _newCustomer: boolean = false;
  private _order: Order;
  private _existingCustomers: Customer[];

  @Output() orderDeleted: EventEmitter<Order> = new EventEmitter<Order>();

  constructor(private ordersService: OrdersService,
              private customersService: CustomersService) {
  }

  ngOnInit() {
    this.customersService.getItems()
      .subscribe(value => this.existingCustomers = value);
  }

  public remove(id: number): void {
    this.ordersService.deleteItem(id)
      .subscribe(value => {
        this.orderDeleted.emit(null);
        console.log(value)
      });
  }

  get isEditing(): boolean {
    return this._isEditing;
  }

  get order(): Order {
    return this._order;
  }

  @Input()
  set isEditing(value: boolean) {
    this._isEditing = value;
  }

  @Input()
  set order(value: Order) {
    this._order = value;
  }
  public get newCustomer(): boolean {
    return this._newCustomer;
  }

  @Input()
  public set newCustomer(value: boolean) {
    this._newCustomer = value;
  }
  get existingCustomers() {
    return this._existingCustomers;
  }

  set existingCustomers(value) {
    this._existingCustomers = value;
  }

  get emptyCustomer() {
    return Customer.empty;
  }


}
