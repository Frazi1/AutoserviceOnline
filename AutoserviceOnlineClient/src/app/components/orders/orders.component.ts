import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../services/load-data-services/orders.service';
import {Order} from '../../helpers/classes/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = [];
  public selectedOrder: Order;
  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.ordersService.getItems()
      .then(value => this.orders = value)
      .then(value => console.log(this.orders));
  }

  public selectOrder(item: Order): void {
    this.selectedOrder = item;
  }
}
