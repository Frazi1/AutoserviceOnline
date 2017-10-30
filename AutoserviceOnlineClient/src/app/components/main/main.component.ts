import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders/orders.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  public getOrders(): void {
    this.ordersService.getOrders();
  }
  ngOnInit() {
  }

}
