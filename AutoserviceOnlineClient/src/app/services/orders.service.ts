import {Injectable} from '@angular/core';
import {Order} from '../helpers/classes/models/order';
import {DataServiceBase} from '../helpers/classes/services/data-service-base';
import {Http} from '@angular/http';
import {URL} from './url';
import {JsonOrderConverter} from '../helpers/classes/converters/json-order-converter';

@Injectable()
export class OrdersService extends DataServiceBase<Order>{

  constructor(http: Http, converter: JsonOrderConverter) {
    super(http, converter);
    this.endPointUrl = URL.ORDERS_URL;
  }
}
