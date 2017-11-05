import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../services/load-data-services/orders.service';
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

  public getOrder(id: number): void {
    this.ordersService.getItem(id)
      .then(value => console.log(value));
  }

  public addOrder(): void {
    // this.ordersService.addItem(new Order(undefined,true,1,1,undefined,undefined))
    //   .then(value => console.log(value));
  }

  public removeOrder(): void {
    this.ordersService.deleteItem(1)
      .then(value => console.log(value));
  }
  ngOnInit() {
  }
}
