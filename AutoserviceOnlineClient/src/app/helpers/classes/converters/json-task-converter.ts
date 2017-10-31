import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Task} from '../models/task';
import {Injectable} from '@angular/core';
import {JsonTask} from '../../interfaces/json-model/json-task';

@Injectable()
export class JsonTaskConverter extends JsonModelConverterBase<Task, JsonTask> {
  getModelFromJson(json: JsonTask): Task {
    return new Task(json.Id, json.Name, json.Price);
  }

  public getJsonFromModel(model: Task): JsonTask {
    return {
      Id: model.id,
      Name: model.name,
      Price: model.price
    }
  }
}
