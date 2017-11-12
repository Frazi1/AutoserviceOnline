import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../helpers/classes/models/order';
import {OrdersService} from "../../services/load-data-services/orders.service";
import {STATES} from "../../modules/routing/states";

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  private _isEditing: boolean;
  private _order: Order;

  @Output() orderDeleted: EventEmitter<Order> = new EventEmitter<Order>();

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
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

  public remove(id: number): void {
    this.ordersService.deleteItem(id)
      .then(value => {
        this.orderDeleted.emit(null);
      });
  }

}
