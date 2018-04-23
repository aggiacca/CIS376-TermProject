import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionPointsCalculatorComponent } from './function-points-calculator.component';
import {FormsModule} from "@angular/forms";
import {FunctionPointsService} from "../services/function-points-service";

describe('FunctionPointsCalculatorComponent', () => {
  let component: FunctionPointsCalculatorComponent;
  let fixture: ComponentFixture<FunctionPointsCalculatorComponent>;
  let TestFunctionPointsService: FunctionPointsService;

  beforeEach(async(() => {
    TestFunctionPointsService = new FunctionPointsService();

    TestBed.configureTestingModule({
      imports:      [ FormsModule ],
      declarations: [ FunctionPointsCalculatorComponent ],
      providers: [
        {provide: FunctionPointsService, useClass: TestFunctionPointsService}
      ]
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

  it("should calculate function points correctly", () =>{

    component.questions[0].rating = 2;
    component.questions[1].rating = 0;
    component.questions[2].rating = 2;
    component.questions[3].rating = 2;
    component.questions[4].rating = 3;
    component.questions[5].rating = 3;
    component.questions[6].rating = 4;
    component.questions[7].rating = 0;
    component.questions[8].rating = 3;
    component.questions[9].rating = 2;
    component.questions[10].rating =2;
    component.questions[11].rating =2;
    component.questions[12].rating = 0;

    component.parameters[0].count = 2;
    component.parameters[1].count = 1;
    component.parameters[2].count = 1;
    component.parameters[3].count = 1;
    component.parameters[4].count = 1;

    component.parameters[0].weightedTotal = 3;
    component.parameters[1].weightedTotal = 4;
    component.parameters[2].weightedTotal = 3;
    component.parameters[3].weightedTotal = 7;
    component.parameters[4].weightedTotal = 5;

    component.calculateFunctionPoints();

    expect(component.functionPoints).toBe(22)

  });

});
