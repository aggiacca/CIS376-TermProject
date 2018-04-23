import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocomoCalculatorComponent } from './cocomo-calculator.component';
import {FormsModule} from "@angular/forms";

describe('CocomoCalculatorComponent', () => {
  let component: CocomoCalculatorComponent;
  let fixture: ComponentFixture<CocomoCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ FormsModule ],
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

  it("should calculate effort correctly", () =>{

    component.currentComplexity = "Organic";
    component.kloc = 1.95;
    component.setValues();

    component.calculateEffort();

    expect(component.effort).toBe(4.83)

  });
});
