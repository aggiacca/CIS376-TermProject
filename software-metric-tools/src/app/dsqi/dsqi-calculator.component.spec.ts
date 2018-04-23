import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsqiCalculatorComponent } from './dsqi-calculator.component';
import {FormsModule} from "@angular/forms";

describe('DsqiCalculatorComponent', () => {
  let component: DsqiCalculatorComponent;
  let fixture: ComponentFixture<DsqiCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ FormsModule ],
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

  it("should calculate dsqi correctly", () =>{


    component.sValues[0].rating = 10;
    component.sValues[1].rating = 2;
    component.sValues[2].rating = 2;
    component.sValues[3].rating = 10;
    component.sValues[4].rating = 2;
    component.sValues[5].rating = 2;
    component.sValues[6].rating = 2;

    component.setSValues();

    component.dValues[1].weight = 50;
    component.dValues[3].weight = 50;

    component.calculateDSQI();

    expect(component.dsqi).toBe(0.8)

  });
});
