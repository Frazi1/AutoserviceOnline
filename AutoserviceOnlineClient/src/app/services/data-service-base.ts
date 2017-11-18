import {Http} from '@angular/http';
import {JsonModelConverterBase} from '../helpers/interfaces/json-model-converter-base';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class DataServiceBase<TModel, TJsonModel> {
  constructor(protected http: Http,
              protected converter: JsonModelConverterBase<TModel, TJsonModel>,
              protected endPointUrl: string) {
  }

  public getItems(): Observable<TModel[]> {
    return this.http.get(this.endPointUrl)
      .map(value => this.converter.getModelArrayFromJson(value.json() as TJsonModel[]))
  }

  public getItem(id: number): Observable<TModel> {
    return this.http.get(this.endPointUrl + id)
      .map(response => this.converter.getModelFromJson(response.json()));
  }

  public addItem(model: TModel): Observable<any> {
    return this.http.post(this.endPointUrl, this.converter.getJsonFromModel(model));
  }

  public deleteItem(id: number): Observable<any> {
    return this.http.delete(this.endPointUrl + id);
  }

  public editItem(id: number, model: TModel): Observable<any> {
    return this.http.put(this.endPointUrl + id, this.converter.getJsonFromModel(model));
  }

  protected handleError(error: any): Promise<any> {
    console.error('Error occured: ', error);
    return Promise.reject(error.message | error);
  }

}
