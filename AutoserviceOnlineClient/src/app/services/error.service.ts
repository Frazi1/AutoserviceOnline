import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() { }

  public handleError(error: any) : void {
    console.log(error);
  }

}
