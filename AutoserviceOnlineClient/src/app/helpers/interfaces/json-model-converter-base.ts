import {JsonToModelConverterInterface} from './json-model-converter.interface';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class JsonModelConverterBase<T> implements JsonToModelConverterInterface<T> {

  public abstract getModelFromJson(json: any): T;
  public getModelArrayFromJson(json: any): T[] {
    const result = [];
    json.forEach(item => {
      result.push(this.getModelFromJson(item));
    });
    return result;
  }
}
