import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Customer} from '../models/customer';
import {Injectable} from '@angular/core';
import {JsonCustomer} from '../../interfaces/json-model/json-customer';

@Injectable()
export class JsonCustomerConverter extends JsonModelConverterBase<Customer, JsonCustomer> {
  public getModelFromJson(json: JsonCustomer): Customer {
    return new Customer(json.Id, json.FirstName, json.MiddleName, json.LastName);
  }

  public getJsonFromModel(model: Customer): JsonCustomer {
    return {
      Id: model.id,
      FirstName: model.firstName,
      LastName: model.lastName,
      MiddleName: model.middleName
    };
  }
}
