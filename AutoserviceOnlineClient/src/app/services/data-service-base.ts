import {Http} from '@angular/http';
import {JsonModelConverterBase} from '../helpers/interfaces/json-model-converter-base';
import {Injectable} from '@angular/core';

@Injectable()
export class DataServiceBase<TModel, TJsonModel> {
  private _endPointUrl: string;

  constructor(protected http: Http,
              protected converter: JsonModelConverterBase<TModel, TJsonModel>) {
  }

  public getItems(): Promise<TModel[]> {
    return this.http.get(this.endPointUrl)
      .toPromise()
      .then(value => this.converter.getModelArrayFromJson(value.json() as TJsonModel[]))
      .catch(this.handleError);
  }

  public getItem(id: number): Promise<TModel> {
    return this.http.get(this.endPointUrl + id)
      .toPromise()
      .then(value => this.converter.getModelFromJson(value.json() as TJsonModel))
      .catch(this.handleError);
  }

  public addItem(model: TModel): Promise<TModel> {
    return this.http.post(this.endPointUrl, this.converter.getJsonFromModel(model))
      .toPromise()
      .then(value => console.log(value))
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
