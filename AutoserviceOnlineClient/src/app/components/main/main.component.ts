import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../services/orders.service';
import {Order} from '../../helpers/classes/models/order';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public orders: Order[];

  constructor(private ordersService: OrdersService) {
  }

  public getOrders(): void {
    this.ordersService.getItems()
      .then(value => console.log(value));
  }
  ngOnInit() {
  }
}
