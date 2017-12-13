import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {InputComponent} from './input.component';
import {Component, DebugElement, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {InputDirective} from './input.directive';

describe('InputComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHostComponent: TestHostComponent;
  let component: InputComponent;
  let debugElement: DebugElement;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent, InputDirective, TestHostComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    component = testHostComponent.child;
    debugElement = fixture.debugElement.query(By.css('app-input'));
    nativeElement = fixture.nativeElement.querySelector('app-input');
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be initialized with host component term', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(component.value).toBe(testHostComponent.term);
    expect(nativeElement.querySelector('input').value).toBe(testHostComponent.term);
  }));

  it('should add class pok-input-focused when input is focused and remove it on blur', () => {
    expect(nativeElement.classList).not.toContain('pok-input-focused');
    debugElement.query(By.css('input')).triggerEventHandler('focus', null);
    fixture.detectChanges();
    expect(nativeElement.classList).toContain('pok-input-focused');
    debugElement.query(By.css('input')).triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(nativeElement.classList).not.toContain('pok-input-focused');
  });

  it('should add class pok-input-empty when input is empty and remove it when it\'s not', () => {
    fixture.detectChanges();
    expect(nativeElement.classList).not.toContain('pok-input-empty');
    component.value = '';
    fixture.detectChanges();
    expect(nativeElement.classList).toContain('pok-input-empty');
    component.value = 'any other term';
    fixture.detectChanges();
    expect(nativeElement.classList).not.toContain('pok-input-empty');
  });

  it('should propagateTouched method be called on blur event', () => {
    fixture.detectChanges();
    const propagateTouchedSpy = spyOn(component, 'propagateTouched');
    debugElement.query(By.css('input')).triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(propagateTouchedSpy).toHaveBeenCalledTimes(1);
  });

  it('should propagateChange method be called on value change', () => {
    fixture.detectChanges();
    const propagateChangeSpy = spyOn(component, 'propagateChange');
    component.value = 'another term';
    fixture.detectChanges();
    expect(propagateChangeSpy).toHaveBeenCalledTimes(1);
  });

});

@Component({
  template: `<app-input [(ngModel)]="term"></app-input>`
})
class TestHostComponent {

  term = 'any term';

  @ViewChild(InputComponent)
  child: InputComponent;

}
