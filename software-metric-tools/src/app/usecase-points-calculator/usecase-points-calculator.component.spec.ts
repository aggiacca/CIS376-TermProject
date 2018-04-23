import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasePointsCalculatorComponent } from './usecase-points-calculator.component';
import {FormsModule} from "@angular/forms";

describe('UsecasePointsCalculatorComponent', () => {
  let component: UsecasePointsCalculatorComponent;
  let fixture: ComponentFixture<UsecasePointsCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ FormsModule ],
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

    it("should calculate use case points correctly", () =>{
      component.simpleUUCW = 6;

      component.complexUAW = 1;

      component.questions[0].rating = 0;
      component.questions[1].rating = 2;
      component.questions[2].rating = 5;
      component.questions[3].rating = 2;
      component.questions[4].rating = 0;
      component.questions[5].rating = 3;
      component.questions[6].rating = 5;
      component.questions[7].rating = 0;
      component.questions[8].rating = 3;
      component.questions[9].rating = 0;
      component.questions[10].rating = 3;
      component.questions[11].rating = 0;
      component.questions[12].rating = 1;

      component.environmentalFactors[0].rating = 4;
      component.environmentalFactors[1].rating = 1;
      component.environmentalFactors[2].rating = 0;
      component.environmentalFactors[3].rating = 5;
      component.environmentalFactors[4].rating = 4;
      component.environmentalFactors[5].rating = 2;
      component.environmentalFactors[6].rating = 4;
      component.environmentalFactors[7].rating = 4;

      component.calculateUseCasePoint();

      expect(component.UCP).toBe(19)

    });
});
