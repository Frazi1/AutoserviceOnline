import {Injectable} from '@angular/core';
import {Order} from '../../helpers/classes/models/order';
import {DataServiceBase} from '../data-service-base';
import {Http} from '@angular/http';
import {URL} from '../url';
import {JsonOrderConverter} from '../../helpers/classes/converters/json-order-converter';
import {JsonOrder} from '../../helpers/interfaces/json-model/json-order';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrdersService extends DataServiceBase<Order, JsonOrder> {

  constructor(http: Http, converter: JsonOrderConverter) {
    super(http, converter, URL.ORDERS_URL);
  }

  public addOrder(order: Order, customerId: number, carId: number): Observable<number> {
    return this.http.post(this.endPointUrl + '/AddOrder/?customerId=' + customerId + '&carId=' + carId,
      this.converter.getJsonFromModel(order))
      .map(data => data.json().id);
  }
}
