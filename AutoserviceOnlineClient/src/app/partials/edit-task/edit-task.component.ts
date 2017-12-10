import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../helpers/classes/models/task';
import {TasksService} from '../../services/load-data-services/tasks.service';
import {ErrorService} from '../../services/error.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  private _currentTask: Task;

  @Output()
  public taskAdded = new EventEmitter();

  constructor(private tasksService: TasksService,
              private errorService: ErrorService)
  { }

  ngOnInit() {
  }

  protected addTask(task: Task): void {
    if (task && task.name && task.price) {
      this.tasksService.addItem(task)
        .subscribe(data => this.taskAdded.emit(data),
          err => this.errorService.handleError(err));
    }
  }

  get currentTask(): Task {
    return this._currentTask;
  }

  @Input()
  set currentTask(value: Task) {
    this._currentTask = value;
  }
}
