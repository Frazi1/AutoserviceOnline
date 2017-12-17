import {Injectable} from '@angular/core';
import {DataServiceBase} from '../data-service-base';
import {Car} from '../../helpers/classes/models/car';
import {Http} from '@angular/http';
import {URL} from '../url';
import {JsonCar} from '../../helpers/interfaces/json-model/json-car';
import {JsonCarConverter} from '../../helpers/classes/converters/json-car-converter';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CarsService extends DataServiceBase<Car, JsonCar> {

  constructor(http: Http, converter: JsonCarConverter) {
    super(http, converter, URL.CARS_URL);
  }

  public getCustomerCars(customerId: number): Observable<Car[]> {
    return this.http.get(this.endPointUrl + 'GetCustomerCars/?customerId=' + customerId)
      .map(data => this.converter.getModelArrayFromJson(data.json()));
  }

  public addCar(car: Car, customerId: number): Observable<number> {
    return this.http.post(this.endPointUrl + 'AddCar/?customerId=' + customerId, this.converter.getJsonFromModel(car))
      .map(data => data.json().id);
  }
}
