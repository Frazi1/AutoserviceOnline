import {Car} from './car';
import {Customer} from './customer';

export class Order {
  private _id: number;
  private _isCompleted: boolean;
  // private _carId: number;
  // private _customerId: number;
  private _completionDate: Date;
  private _creationDate: Date;
  private _car: Car;
  private _customer: Customer;

  constructor(id?: number,
              isCompleted: boolean = false,
              // carId: number,
              // customerId: number,
              completionDate?: Date,
              creationDate: Date = new Date(Date.now()),
              car: Car = Car.empty,
              customer: Customer = Customer.empty) {
    this.id = id;
    this.isCompleted = isCompleted;
    // this.carId = carId;
    // this.customerId = customerId;
    this.completionDate = completionDate;
    this.creationDate = creationDate;
    this.car = car;
    this.customer = customer;
  }

  public static get Empty(): Order {
    return new Order();
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  set isCompleted(value: boolean) {
    this._isCompleted = value;
  }

  get carId(): number {
    return this.car.id;
  }

  get customerId(): number {
    return this.customer.id;
  }

  get completionDate(): Date {
    return this._completionDate;
  }

  set completionDate(value: Date) {
    this._completionDate = value;
  }

  get car(): Car {
    return this._car;
  }

  set car(value: Car) {
    this._car = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  public get creationDate(): Date {
    return this._creationDate;
  }

  public set creationDate(value: Date) {
    this._creationDate = value;
  }
}
