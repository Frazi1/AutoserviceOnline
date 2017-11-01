import {Injectable} from '@angular/core';
import {Order} from '../../helpers/classes/models/order';
import {DataServiceBase} from '../data-service-base';
import {Http} from '@angular/http';
import {URL} from '../url';
import {JsonOrderConverter} from '../../helpers/classes/converters/json-order-converter';
import {JsonOrder} from '../../helpers/interfaces/json-model/json-order';

@Injectable()
export class OrdersService extends DataServiceBase<Order, JsonOrder>{

  constructor(http: Http, converter: JsonOrderConverter) {
    super(http, converter);
    this.endPointUrl = URL.ORDERS_URL;
  }
}
