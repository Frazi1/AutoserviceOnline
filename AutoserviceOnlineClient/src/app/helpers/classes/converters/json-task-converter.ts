import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Task} from '../models/task';
import {Injectable} from '@angular/core';

@Injectable()
export class JsonTaskConverter extends JsonModelConverterBase<Task> {
  getModelFromJson(json: any): Task {
    return new Task(json.Id, json.Name, json.price);
  }
}
