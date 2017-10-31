import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Workman} from '../models/workman';
import {Injectable} from '@angular/core';
import {JsonWorkman} from '../../interfaces/json-model/json-workman';
import {JsonCar} from '../../interfaces/json-model/json-car';

@Injectable()
export class JsonWorkmanConverter extends JsonModelConverterBase<Workman, JsonWorkman> {
  public getModelFromJson(json: JsonWorkman): Workman {
    return new Workman(json.Id,json.FirstName, json.MiddleName, json.LastName);
  }

  public getJsonFromModel(model: Workman): JsonWorkman {
    return {
      Id: model.id,
      MiddleName: model.middleName,
      LastName: model.lastName,
      FirstName: model.firstName
    };
  }
}
