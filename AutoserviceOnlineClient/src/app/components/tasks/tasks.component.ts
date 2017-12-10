import {Component, OnInit} from '@angular/core';
import {Task} from '../../helpers/classes/models/task';
import {TasksService} from '../../services/load-data-services/tasks.service';
import {ErrorService} from '../../services/error.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  private _currentTask: Task = Task.empty;
  private _tasksList: Task[] = [];

  constructor(private tasksService: TasksService,
              private errorService: ErrorService) {
  }

  ngOnInit() {
    this.loadTasks();
  }

  private loadTasks() {
    this.tasksService.getItems()
      .subscribe(data => this.tasksList = data,
        err => this.errorService.handleError(err));
  }

  protected selectTask(task: Task): void {
    this.tasksService.getItem(task.id)
      .subscribe(data => this.currentTask = data,
        err => this.errorService.handleError(err));
  }

  protected openAddDialog(): void {

  }

  //#region Properties
  get currentTask(): Task {
    return this._currentTask;
  }

  set currentTask(value: Task) {
    this._currentTask = value;
  }

  get tasksList(): Task[] {
    return this._tasksList;
  }

  set tasksList(value: Task[]) {
    this._tasksList = value;
  }

  //#endretion
}
