import {Component, Input, OnInit} from '@angular/core';
import {OrdersService} from '../../services/load-data-services/orders.service';
import {Order} from '../../helpers/classes/models/order';
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = [];
  @Input() public selectedOrder: Order;

  constructor(private ordersService: OrdersService,
              private errorService: ErrorService) {
  }

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders() {
    this.ordersService.getItems()
      .subscribe(value => {
          this.orders = value;
          if (this.orders
            && this.selectedOrder
            && !this.orders.find(currOrder => currOrder.id == this.selectedOrder.id)) {
            this.selectedOrder = null;
          }
        },
        err => this.errorService.handleError(err));
  }

  public selectOrder(item: Order): void {
    if(item) {
      this.ordersService.getItem(item.id)
        .subscribe(data => this.selectedOrder = data,
          err => this.errorService.handleError(err));
    }
  }


}
