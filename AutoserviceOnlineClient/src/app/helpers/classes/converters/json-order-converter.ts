import {Order} from '../models/order';
import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Injectable} from '@angular/core';
import {JsonOrder} from '../../interfaces/json-model/json-order';
import {JsonCarConverter} from './json-car-converter';
import {JsonCustomerConverter} from './json-customer-converter';

@Injectable()
export class JsonOrderConverter extends JsonModelConverterBase<Order, JsonOrder> {
  private jsonCarConverter = new JsonCarConverter();
  private jsonCustomerConverter = new JsonCustomerConverter();
  public getModelFromJson(json: JsonOrder): Order {
    return new Order(json.Id,
      json.Completed,
      json.CarId,
      json.CustomerId,
      json.CompletionDate,
      json.Created,
      this.jsonCarConverter.getModelFromJson(json.Car),
      this.jsonCustomerConverter.getModelFromJson(json.Customer)
      );
  }

  public getJsonFromModel(model: Order): JsonOrder {
    return {
      Id: model.id,
      CustomerId: model.customerId,
      Completed: model.isCompleted,
      CompletionDate: model.completionDate,
      Created: model.creationDate,
      CarId: model.carId,
      Car: model.car
        ? this.jsonCarConverter.getJsonFromModel(model.car)
        : undefined,
      Customer: model.customer
        ? this.jsonCustomerConverter.getJsonFromModel(model.customer)
        : undefined
    }
  }
}
