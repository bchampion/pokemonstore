import {Component, EventEmitter, HostListener, OnInit} from '@angular/core';
import {KeyCodes} from '../key-codes';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  onPrevious: EventEmitter<void>;
  onNext: EventEmitter<void>;
  onClose: EventEmitter<void>;

  constructor() { }

  ngOnInit() {
  }

  close() {
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  keyEvent(keyCode) {
    if (keyCode === KeyCodes.ESCAPE) {
    }
    if (keyCode === KeyCodes.RIGHT_ARROW) {
    }
    if (keyCode === KeyCodes.LEFT_ARROW) {
    }
  }
}
