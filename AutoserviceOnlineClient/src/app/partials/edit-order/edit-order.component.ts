import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../helpers/classes/models/order';
import {OrdersService} from '../../services/load-data-services/orders.service';
import {CustomersService} from '../../services/load-data-services/customers.service';
import {Customer} from '../../helpers/classes/models/customer';
import {ErrorService} from '../../services/error.service';
import {Car} from '../../helpers/classes/models/car';
import {CarsService} from '../../services/load-data-services/cars.service';
import {FormControl} from '@angular/forms';
import {TasksService} from '../../services/load-data-services/tasks.service';
import {Task} from '../../helpers/classes/models/task';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  private _isEditing: boolean;
  private _newCustomer: boolean = false;
  private _order: Order;
  private _existingCustomers: Customer[];
  private _customerCars: Car[];

  protected tasksFormControl: FormControl = new FormControl();
  protected tasksList: Task[] = [];

  @Output()
  public orderChanged: EventEmitter<Order> = new EventEmitter<Order>();


  constructor(private ordersService: OrdersService,
              private customersService: CustomersService,
              private carsService: CarsService,
              private errorService: ErrorService,
              private tasksService: TasksService) {
  }

  ngOnInit() {
    this.customersService.getItems()
      .subscribe(value => this.existingCustomers = value,
        err => this.errorService.handleError(err));
    this.tasksService.getItems()
      .subscribe(data => this.tasksList = data,
        err => this.errorService.handleError(err));
  }

  public remove(id: number): void {
    this.ordersService.deleteItem(id)
      .subscribe(value => this.orderChanged.emit(null),
        err => this.errorService.handleError(err));
  }

  public saveOrder(item: Order): void {
    this.ordersService.editItem(item.id, item)
      .subscribe(value => {
          this.orderChanged.emit(value);
        },
        err => this.errorService.handleError(err));
  }

  public addOrder(order: Order): void {
    // console.log(this.tasksFormControl.value);
    // return;
    this.order.tasks = [];
    // if(this.tasksFormControl.value) {
    // this.tasksFormControl.value.forEach(data => this.order.tasks.push(data));
    // }
    this.processCustomer(order.customer)
      .subscribe(customerId => this.processCar(order.car, customerId)
        .subscribe(carId =>this.ordersService.addOrder(order, customerId, carId)
          .subscribe(value => this.orderChanged.emit(),err => this.errorService.handleError(err))));
  }

  private processCustomer(customer: Customer): Observable<number> {
    if (!customer.id) {
      return this.customersService.addItem(customer)
        .map(data => {
          customer.id = data;
          return data;
        });
    }
    return Observable.timer(0).map(value => customer.id);
  }

  private processCar(car: Car, customerId: number): Observable<number> {
    if (!car.id) {
      return this.carsService.addCar(car, customerId).map(data => {
        car.id = data;
        return data;
      });
    }
    return Observable.timer(0).map(value => car.id);
  }

  //#region Properties
  get isEditing(): boolean {
    return this._isEditing;
  }

  get order(): Order {
    return this._order;
  }

  @Input()
  set isEditing(value: boolean) {
    this._isEditing = value;
  }

  @Input()
  set order(value: Order) {
    this._order = value;

  }

  public get newCustomer(): boolean {
    return this._newCustomer;
  }

  @Input()
  public set newCustomer(value: boolean) {
    this._newCustomer = value;
  }

  get existingCustomers() {
    return this._existingCustomers;
  }

  set existingCustomers(value) {
    this._existingCustomers = value;
  }

  get emptyCustomer(): Customer {
    return Customer.empty;
  }

  get emptyCar(): Car {
    return Car.empty;
  }

  get customerCars(): Car[] {
    return this._customerCars;
  }

  get orderCar(): Car {
    return this.order.car;
  }

  set orderCar(car: Car) {
    this.order.car = car;

  }

  get orderCustomer(): Customer {
    return this.order.customer;
  }

  set orderCustomer(customer: Customer) {
    this.order.customer = customer;
    if (customer.id) {
      this.carsService.getCustomerCars(customer.id)
        .subscribe(data => this._customerCars = data,
          err => this.errorService.handleError(err));
    }
  }

//#endregion

}
