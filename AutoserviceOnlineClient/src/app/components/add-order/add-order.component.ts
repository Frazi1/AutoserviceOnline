import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../helpers/classes/models/order';
import {OrdersService} from '../../services/load-data-services/orders.service';
import {Router} from "@angular/router";
import {STATES} from "../../modules/routing/states";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  private _order: Order = Order.Empty;

  constructor(private ordersService: OrdersService,
              private router: Router) {
  }

  ngOnInit() {
  }

  public addOrder(): void {
    this.ordersService.addItem(this.order)
      .subscribe(value => this.router.navigate([STATES.STATE_ORDERS]));
  }

  get order(): Order {
    return this._order;
  }

  @Input() set order(value: Order) {
    this._order = value;
  }
}
