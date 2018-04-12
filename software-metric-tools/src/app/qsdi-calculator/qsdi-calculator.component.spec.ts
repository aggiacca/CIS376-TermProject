import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsdiCalculatorComponent } from './qsdi-calculator.component';

describe('QsdiCalculatorComponent', () => {
  let component: QsdiCalculatorComponent;
  let fixture: ComponentFixture<QsdiCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsdiCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsdiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
