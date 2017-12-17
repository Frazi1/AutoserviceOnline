import {Injectable} from '@angular/core';
import {DataServiceBase} from '../data-service-base';
import {Task} from '../../helpers/classes/models/task';
import {Http} from '@angular/http';
import {URL} from '../url';
import {JsonTask} from '../../helpers/interfaces/json-model/json-task';
import {JsonTaskConverter} from '../../helpers/classes/converters/json-task-converter';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TasksService extends DataServiceBase<Task, JsonTask> {
  constructor(http: Http, converter: JsonTaskConverter) {
    super(http, converter, URL.TASKS_URL);
  }

  public appendTasksToOrder(taskIds: number[], orderId: number): Observable<any> {
    return this.http.post(this.endPointUrl + '/AppendToOrder/?orderId=' + orderId, taskIds);
  }
}
