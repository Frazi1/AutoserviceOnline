import {Component, Input, OnInit} from '@angular/core';
import {OrdersService} from '../../services/load-data-services/orders.service';
import {Order} from '../../helpers/classes/models/order';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = [];
  @Input() public selectedOrder: Order;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders() {
    this.ordersService.getItems()
      .then(value => this.orders = value)
      .then(value => console.log(this.orders));
  }

  public selectOrder(item: Order): void {
    this.selectedOrder = item;
  }

  public saveOrder(item: Order): void {
    this.ordersService.editItem(item.id, item)
      .then(value => this.loadOrders())
  }
}
