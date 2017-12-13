import {Component, forwardRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/observable/interval';
import {InputDirective} from './input.directive';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  host: {
    '[class.pok-input-focused]': 'control.focused',
    '[class.pok-input-empty]': '!_value',
  },
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @ViewChild(InputDirective) control: InputDirective;

  _value: string;

  get value(): string {
    return this._value;
  }

  set value(v: string) {
    this._value = v;
    this.propagateChange(v);
    this.propagateTouched();
  }

  propagateChange: any = () => {};
  propagateTouched: any = () => {};

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  onBlur() {
    this.propagateTouched();
  }
}
