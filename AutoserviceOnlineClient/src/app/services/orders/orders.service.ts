import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Order} from "./order";
import {URL} from "../url";

@Injectable()
export class OrdersService {

  constructor(private http: Http) {
  }

  private getOrderModelFromJson(json): Order {
    return new Order(json.Id, json.Completed, json.CarId, json.CustomerId, json.CompletionDate);
  }

  private getOrderModelArrayFromJson(json): Order[] {
    const result = [];
    const f = this.getOrderModelFromJson;
    json.forEach(function (item) {
      result.push(f(item));
    });
    return result;
  }

  public getOrders(): Order[] {
    // let orders;
    this.http.get(URL.ORDERS_URL)
      .toPromise()
      .then(value => {
        console.log(value.json());
        return console.log(this.getOrderModelArrayFromJson(value.json()));
      });
    return [];
  }
}
