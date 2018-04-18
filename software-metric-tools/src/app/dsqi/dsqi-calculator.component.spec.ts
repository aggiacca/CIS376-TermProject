import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsqiCalculatorComponent } from './dsqi-calculator.component';

describe('DsqiCalculatorComponent', () => {
  let component: DsqiCalculatorComponent;
  let fixture: ComponentFixture<DsqiCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsqiCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsqiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
