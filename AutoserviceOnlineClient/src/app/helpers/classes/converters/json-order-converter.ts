import {Order} from '../models/order';
import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Injectable} from '@angular/core';

@Injectable()
export class JsonOrderConverter extends JsonModelConverterBase<Order> {
  public getModelFromJson(json: any): Order {
    return new Order(json.Id, json.Completed, json.CarId, json.CustomerId, json.CompletionDate);
  }
}
