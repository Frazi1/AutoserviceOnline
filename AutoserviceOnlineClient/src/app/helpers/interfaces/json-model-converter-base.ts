import {JsonToModelConverterInterface} from './json-model-converter.interface';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class JsonModelConverterBase<TModel, TJsonModel> implements JsonToModelConverterInterface<TModel, TJsonModel> {

  public abstract getModelFromJson(json: TJsonModel): TModel;
  public abstract getJsonFromModel(model: TModel);

  public getModelArrayFromJson(json: TJsonModel[]): TModel[] {
    const result: TModel[] = [];
    json.forEach(item => {
      result.push(this.getModelFromJson(item));
    });
    return result;
  }

  public getJsonArrayFromModel(modelArray: TModel[]): TJsonModel[] {
    const result: TJsonModel[] = [];
    modelArray.forEach(item => {
      result.push(this.getJsonFromModel(item));
    });
    return result;
  }
}
