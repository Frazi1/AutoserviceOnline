import { Component, OnInit } from '@angular/core';
import {Order} from '../../helpers/classes/models/order';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
//  private _order: Order = Order.Empty

  constructor() { }

  ngOnInit() {
  }

}
