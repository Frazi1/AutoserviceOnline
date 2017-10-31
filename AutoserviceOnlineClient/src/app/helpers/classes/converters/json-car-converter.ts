import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Car} from '../models/car';
import {Injectable} from '@angular/core';
import {JsonCar} from '../../interfaces/json-model/json-car';

@Injectable()
export class JsonCarConverter extends JsonModelConverterBase<Car, JsonCar> {
  public getModelFromJson(json: JsonCar): Car {
    return new Car(json.Id,
      json.Manufacturer,
      json.Model,
      json.Vin,
      json.ManufactureYear,
      json.CustomerId);
  }

  public getJsonFromModel(model: Car): JsonCar {
    return {
      CustomerId: model.customerId,
      Id: model.id,
      ManufactureYear: model.manufactureYear,
      Model: model.model,
      Vin: model.vin,
      Manufacturer: model.manufacturer
    };
  }
}
