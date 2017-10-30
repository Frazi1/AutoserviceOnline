import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Workman} from '../models/workman';
import {Injectable} from '@angular/core';

@Injectable()
export class JsonWorkmanConverter extends JsonModelConverterBase<Workman> {
  public getModelFromJson(json: any): Workman {
    return new Workman(json.Id,json.FirstName, json.MiddleName, json.LastName);
  }
}
