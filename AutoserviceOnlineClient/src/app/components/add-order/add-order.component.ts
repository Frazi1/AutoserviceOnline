import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../helpers/classes/models/order';
import {Router} from "@angular/router";
import {STATES} from "../../modules/routing/states";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  private _order: Order = Order.Empty;

  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  get order(): Order {
    return this._order;
  }

  @Input() set order(value: Order) {
    this._order = value;
  }

  goToMainPage() {
    this.router.navigate([STATES.STATE_ORDERS])
  }
}
