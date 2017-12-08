export class Task {
  private _id: number;
  private _name: string;
  private _price: number;

  constructor(id?: number, name?: string, price?: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  static get empty(): Task {
    return new Task();
  }
}
