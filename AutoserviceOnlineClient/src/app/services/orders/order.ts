export class Order {
  public id: number;
  public isCompleted: boolean;
  public carId: number;
  public customerId: number;
  public completionDate: Date;


  constructor(id: number, isCompleted: boolean, carId: number, customerId: number, completionDate: Date) {
    this.id = id;
    this.isCompleted = isCompleted;
    this.carId = carId;
    this.customerId = customerId;
    this.completionDate = completionDate;
  }
}
