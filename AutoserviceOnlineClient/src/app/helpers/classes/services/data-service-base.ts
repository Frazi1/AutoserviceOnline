import {Http} from '@angular/http';
import {JsonModelConverterBase} from '../../interfaces/json-model-converter-base';
import {Injectable} from '@angular/core';

@Injectable()
export class DataServiceBase<T> {
  private _endPointUrl: string;

  constructor(protected http: Http,
              protected converter: JsonModelConverterBase<T>) {
  }

  public getItems(): Promise<T[]> {
    return this.http.get(this.endPointUrl)
      .toPromise()
      .then(value => this.converter.getModelArrayFromJson(value.json()))
      .catch(this.handleError);
  }

  protected handleError(error: any): Promise<any> {
    console.error('Error occured: ', error);
    return Promise.reject(error.message | error);
  }

  get endPointUrl(): string {
    return this._endPointUrl;
  }

  set endPointUrl(value: string) {
    this._endPointUrl = value;
  }
}
