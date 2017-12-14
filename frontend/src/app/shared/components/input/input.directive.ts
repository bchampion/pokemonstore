import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appInput]',
  host: {
    '(blur)': 'focusChanged(false)'
  }
})
export class InputDirective {

  focused = false;

  constructor() { }

  @HostListener('focus') onFocus() {
    this.focusChanged(true);
  }

  focusChanged(focused: boolean) {
    this.focused = focused;
  }

}
