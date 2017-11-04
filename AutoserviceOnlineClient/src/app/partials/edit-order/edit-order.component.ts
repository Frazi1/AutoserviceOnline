import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../helpers/classes/models/order';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  private _isEditing: boolean;
  private _order: Order;
  constructor() { }

  ngOnInit() {
  }

  get isEditing(): boolean {
    return this._isEditing;
  }

  @Input() set isEditing(value: boolean) {
    this._isEditing = value;
  }
  get order(): Order {
    return this._order;
  }

  @Input() set order(value: Order) {
    this._order = value;
  }

}
