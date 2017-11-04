import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../helpers/classes/models/car';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  private _car: Car;

  get car(): Car {
    return this._car;
  }

  @Input() set car(value: Car) {
    this._car = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
