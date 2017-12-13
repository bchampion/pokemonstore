import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalComponent} from './modal.component';
import {KeyCodes} from "../key-codes";

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method close emits onClose event', () => {
    const spy = spyOn(component.onClose, 'emit');
    component.close();
    expect(spy).toHaveBeenCalled();
  });

  it('should LEFT ARROW keyup should emits previous event', () => {
    const spy = spyOn(component.onPrevious, 'emit');
    component.keyEvent(KeyCodes.LEFT_ARROW);
    expect(spy).toHaveBeenCalled();
  });

  it('should RIGHT ARROW keyup should emits next event', () => {
    const spy = spyOn(component.onNext, 'emit');
    component.keyEvent(KeyCodes.RIGHT_ARROW);
    expect(spy).toHaveBeenCalled();
  });

  it('should ESCAPE keyup should emits close event', () => {
    const spy = spyOn(component.onClose, 'emit');
    component.keyEvent(KeyCodes.ESCAPE);
    expect(spy).toHaveBeenCalled();
  });
});
