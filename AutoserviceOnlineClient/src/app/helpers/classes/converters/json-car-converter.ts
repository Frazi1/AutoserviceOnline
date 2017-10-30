import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Car} from '../models/car';
import {Injectable} from '@angular/core';

@Injectable()
export class JsonCarConverter extends JsonModelConverterBase<Car> {
  public getModelFromJson(json: any): Car {
    return new Car(json.Id,
      json.Manufacturer,
      json.Model,
      json.Vin,
      json.ManufactureYear,
      json.CustomerId);
  }
}
