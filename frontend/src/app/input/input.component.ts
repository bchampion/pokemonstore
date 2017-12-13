import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit {

  value: string;

  propagateChange: any = () => {};
  propagateTouched: any = () => {};

  constructor() {
  }

  ngOnInit() {
  }

}
