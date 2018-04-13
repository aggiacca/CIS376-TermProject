import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasePointsCalculatorComponent } from './usecase-points-calculator.component';

describe('UsecasePointsCalculatorComponent', () => {
  let component: UsecasePointsCalculatorComponent;
  let fixture: ComponentFixture<UsecasePointsCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecasePointsCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecasePointsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
