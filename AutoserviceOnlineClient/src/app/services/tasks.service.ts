import {Injectable} from '@angular/core';
import {DataServiceBase} from '../helpers/classes/services/data-service-base';
import {Task} from '../helpers/classes/models/task';
import {JsonModelConverterBase} from '../helpers/interfaces/json-model-converter-base';
import {Http} from '@angular/http';
import {URL} from './url';

@Injectable()
export class TasksService extends DataServiceBase<Task> {
  constructor(http: Http, converter: JsonModelConverterBase<Task>) {
    super(http, converter);
    this.endPointUrl = URL.TASKS_URL;
  }
}
