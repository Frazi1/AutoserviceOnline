import {Car} from './car';
import {Customer} from './customer';

export class Order {
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

  get creationDate(): Date {
    return this._creationDate;
  }

  set creationDate(value: Date) {
    this._creationDate = value;
  }

  private _id: number;
  private _isCompleted: boolean;
  private _carId: number;
  private _customerId: number;
  private _completionDate: Date;
  private _creationDate: Date;
  private _car: Car;
  private _customer: Customer;

  constructor(id: number,
              isCompleted: boolean,
              carId: number,
              customerId: number,
              completionDate: Date,
              creationDate: Date,
              car: Car = null,
              customer: Customer = null) {
    this.id = id;
    this.isCompleted = isCompleted;
    this.carId = carId;
    this.customerId = customerId;
    this.completionDate = completionDate;
    this.creationDate = creationDate;
    this.car = car;
    this.customer = customer;
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
    return this._carId;
  }

  set carId(value: number) {
    this._carId = value;
  }

  get customerId(): number {
    return this._customerId;
  }

  set customerId(value: number) {
    this._customerId = value;
  }

  get completionDate(): Date {
    return this._completionDate;
  }

  set completionDate(value: Date) {
    this._completionDate = value;
  }
}
