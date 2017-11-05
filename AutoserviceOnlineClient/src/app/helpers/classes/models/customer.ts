import {Person} from './person';

export class Customer extends Person {
  public static get empty(){
    return Person.empty;
  }
}
