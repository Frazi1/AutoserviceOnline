import {Injectable} from '@angular/core';
import {DataServiceBase} from '../data-service-base';
import {Customer} from '../../helpers/classes/models/customer';
import {Http} from '@angular/http';
import {JsonModelConverterBase} from '../../helpers/interfaces/json-model-converter-base';
import {URL} from '../url';
import {JsonCustomer} from '../../helpers/interfaces/json-model/json-customer';
import {JsonCarConverter} from '../../helpers/classes/converters/json-car-converter';
import {JsonCustomerConverter} from '../../helpers/classes/converters/json-customer-converter';

@Injectable()
export class CustomersService extends DataServiceBase<Customer, JsonCustomer> {

  constructor(http: Http, converter: JsonCustomerConverter) {
    super(http, converter);
    this.endPointUrl = URL.CUSTOMERS_URL;
  }
}
