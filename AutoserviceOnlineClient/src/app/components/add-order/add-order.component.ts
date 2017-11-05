import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../helpers/classes/models/order';
import {OrdersService} from '../../services/load-data-services/orders.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  private _order: Order = Order.Empty;

  constructor(private ordersService: OrdersService,
              private location: Location) {
  }

  ngOnInit() {
  }

  public addOrder(): void {
    console.log(1);
    this.ordersService.addItem(this.order)
      .then(value => this.location.back());
  }

  get order(): Order {
    return this._order;
  }

  @Input() set order(value: Order) {
    this._order = value;
  }
}
