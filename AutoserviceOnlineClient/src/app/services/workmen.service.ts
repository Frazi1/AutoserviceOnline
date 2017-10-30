import { Injectable } from '@angular/core';
import {DataServiceBase} from '../helpers/classes/services/data-service-base';
import {Workman} from '../helpers/classes/models/workman';
import {JsonModelConverterBase} from '../helpers/interfaces/json-model-converter-base';
import {Http} from '@angular/http';
import {URL} from './url';

@Injectable()
export class WorkmenService  extends DataServiceBase<Workman>{

  constructor(http: Http, converter: JsonModelConverterBase<Workman>) {
    super(http, converter);
    this.endPointUrl = URL.WORKMEN_URL;
  }
}
