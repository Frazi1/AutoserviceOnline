import {Injectable} from '@angular/core';
import {DataServiceBase} from '../helpers/classes/services/data-service-base';
import {Customer} from '../helpers/classes/models/customer';
import {Http} from '@angular/http';
import {JsonModelConverterBase} from '../helpers/interfaces/json-model-converter-base';
import {URL} from './url';

@Injectable()
export class CustomersService extends DataServiceBase<Customer> {

  constructor(http: Http, converter: JsonModelConverterBase<Customer>) {
    super(http, converter);
    this.endPointUrl = URL.CUSTOMERS_URL;
  }
}
