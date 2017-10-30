export class Car {
  private _id: number;
  private _manufacturer: string;
  private _model: string;
  private _vin: string;
  private _manufactureYear: number;
  private _customerId: number;


  constructor(id: number, manufacturer: string, model: string, vin: string, manufactureYear: number, customerId: number) {
    this.id = id;
    this.manufacturer = manufacturer;
    this.model = model;
    this.vin = vin;
    this.manufactureYear = manufactureYear;
    this.customerId = customerId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get manufacturer(): string {
    return this._manufacturer;
  }

  set manufacturer(value: string) {
    this._manufacturer = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get vin(): string {
    return this._vin;
  }

  set vin(value: string) {
    this._vin = value;
  }

  get manufactureYear(): number {
    return this._manufactureYear;
  }

  set manufactureYear(value: number) {
    this._manufactureYear = value;
  }

  get customerId(): number {
    return this._customerId;
  }

  set customerId(value: number) {
    this._customerId = value;
  }
}
