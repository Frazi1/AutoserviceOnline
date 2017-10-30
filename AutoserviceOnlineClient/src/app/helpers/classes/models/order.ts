export class Order {
  private _id: number;
  private _isCompleted: boolean;
  private _carId: number;
  private _customerId: number;
  private _completionDate: Date;

  constructor(id: number, isCompleted: boolean, carId: number, customerId: number, completionDate: Date) {
    this.id = id;
    this.isCompleted = isCompleted;
    this.carId = carId;
    this.customerId = customerId;
    this.completionDate = completionDate;
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
