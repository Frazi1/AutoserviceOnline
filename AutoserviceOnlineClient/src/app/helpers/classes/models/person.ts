export class Person {
  private _id: number;
  private _firstName: string;
  private _middleName: string;
  private _lastName: string;


  constructor(id: number = null,
              firstName: string = null,
              middleName: string = null,
              lastName: string = null) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  protected static get empty() {
    return new Person();
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get middleName(): string {
    return this._middleName;
  }

  set middleName(value: string) {
    this._middleName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
}
