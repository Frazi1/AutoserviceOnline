import {Order} from '../models/order';
import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Injectable} from '@angular/core';
import {JsonOrder} from '../../interfaces/json-model/json-order';

@Injectable()
export class JsonOrderConverter extends JsonModelConverterBase<Order, JsonOrder> {
  public getModelFromJson(json: JsonOrder): Order {
    return new Order(json.Id, json.Completed, json.CarId, json.CustomerId, json.CompletionDate, json.Created);
  }

  public getJsonFromModel(model: Order): JsonOrder {
    return {
      Id: model.id,
      CustomerId: model.customerId,
      Completed: model.isCompleted,
      CompletionDate: model.completionDate,
      Created: model.creationDate,
      CarId: model.carId
    }
  }
}
