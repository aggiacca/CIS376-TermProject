import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocomoCalculatorComponent } from './cocomo-calculator.component';

describe('CocomoCalculatorComponent', () => {
  let component: CocomoCalculatorComponent;
  let fixture: ComponentFixture<CocomoCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocomoCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocomoCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
