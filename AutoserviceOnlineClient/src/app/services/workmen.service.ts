import { Injectable } from '@angular/core';
import {DataServiceBase} from './data-service-base';
import {Workman} from '../helpers/classes/models/workman';
import {Http} from '@angular/http';
import {URL} from './url';
import {JsonWorkman} from '../helpers/interfaces/json-model/json-workman';
import {JsonWorkmanConverter} from '../helpers/classes/converters/json-workman-converter';

@Injectable()
export class WorkmenService  extends DataServiceBase<Workman, JsonWorkman>{

  constructor(http: Http, converter: JsonWorkmanConverter) {
    super(http, converter);
    this.endPointUrl = URL.WORKMEN_URL;
  }
}
