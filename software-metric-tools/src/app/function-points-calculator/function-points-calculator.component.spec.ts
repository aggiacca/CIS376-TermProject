import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionPointsCalculatorComponent } from './function-points-calculator.component';

describe('FunctionPointsCalculatorComponent', () => {
  let component: FunctionPointsCalculatorComponent;
  let fixture: ComponentFixture<FunctionPointsCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionPointsCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionPointsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
