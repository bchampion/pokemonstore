import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {KeyCodes} from '../../key-codes';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('modal', [
      state('*', style({transform: 'scale3d(1, 1, 1)'})),
      state('void', style({transform: 'scale3d(0.3, 0.3, 0.3)'})),
      transition('void => *', [
        animate(150)
      ]),
      transition('* => void', [
        animate(150)
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {

  @Output() onPrevious = new EventEmitter<void>();
  @Output() onNext = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.onClose.emit();
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  keyEvent(keyCode) {
    if (keyCode === KeyCodes.ESCAPE) {
      this.onClose.emit();
    }
    if (keyCode === KeyCodes.RIGHT_ARROW) {
      this.onNext.emit();
    }
    if (keyCode === KeyCodes.LEFT_ARROW) {
      this.onPrevious.emit();
    }
  }
}
