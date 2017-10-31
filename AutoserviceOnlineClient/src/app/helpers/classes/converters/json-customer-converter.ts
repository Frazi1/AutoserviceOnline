import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Customer} from '../models/customer';
import {Injectable} from '@angular/core';

@Injectable()
export class JsonCustomerConverter extends JsonModelConverterBase<Customer>{
  public getModelFromJson(json: any): Customer {
    return new Customer(json.Id,json.FirstName, json.MiddleName, json.LastName);
  }
}
