import { Injectable } from '@angular/core';
import {DataServiceBase} from '../data-service-base';
import {Car} from '../../helpers/classes/models/car';
import {Http} from '@angular/http';
import {URL} from '../url';
import {JsonCar} from '../../helpers/interfaces/json-model/json-car';
import {JsonCarConverter} from '../../helpers/classes/converters/json-car-converter';

@Injectable()
export class CarsService extends DataServiceBase<Car, JsonCar>{

  constructor(http: Http, converter: JsonCarConverter) {
    super(http, converter, URL.CARS_URL);
  }
}
