import { Injectable } from '@angular/core';
import {DataServiceBase} from '../helpers/classes/services/data-service-base';
import {Car} from '../helpers/classes/models/car';
import {JsonModelConverterBase} from '../helpers/interfaces/json-model-converter-base';
import {Http} from '@angular/http';
import {URL} from './url';

@Injectable()
export class CarsService extends DataServiceBase<Car>{

  constructor(http: Http, converter: JsonModelConverterBase<Car>) {
    super(http, converter);
    this.endPointUrl = URL.CARS_URL;
  }
}
