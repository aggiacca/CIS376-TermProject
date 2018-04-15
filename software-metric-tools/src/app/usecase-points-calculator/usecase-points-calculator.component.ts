import { Component, OnInit } from '@angular/core';
import {Question} from "../models/Question";

@Component({
  selector: 'app-usecase-points-calculator',
  templateUrl: './usecase-points-calculator.component.html',
  styleUrls: ['./usecase-points-calculator.component.css']
})
export class UsecasePointsCalculatorComponent implements OnInit {


  simpleUUCW: number;
  averageUUCW: number;
  complexUUCW: number;

  simpleUAW: number;
  averageUAW: number;
  complexUAW: number;

  questions: Array<Question> = [
    new Question("Distributed system",0, 2),
    new Question("Performance objectives", 0, 2),
    new Question("End-user efficiency",0,1),
    new Question("Complex processing", 0,1),
    new Question("Reusable code", 0,1),
    new Question("Easy to install", 0,0.5),
    new Question("Easy to use", 0,0.5),
    new Question("Portable", 0,2),
    new Question("Easy to change", 0,1),
    new Question("Concurrent use", 0,1),
    new Question("Security", 0,1),
    new Question("Access for third parties", 0,1),
    new Question("Training needs", 0,1)
  ];

  environmentalFactors: Array<Question> = [
    new Question("Familiar with Development Process",0, 1.5),
    new Question("Lead Analyst Capable", 0, 0.5),
    new Question("Part Time Staff",0,-1),
    new Question("Application Experience", 0,0.5),
    new Question("Motivation", 0,1),
    new Question("Programming Language", 0,-1),
    new Question("Object Oriented Experience", 0,1),
    new Question("Stable Requirements", 0,2)
  ];

  UCP: number;

  constructor() { }

  ngOnInit() {
  }

  calculateUseCasePoint(){
    let totalUUCW= (this.simpleUUCW * 1) + (this.averageUUCW * 2) + (this.complexUUCW * 3);
    let totalUAW= (this.simpleUAW * 1) + (this.averageUAW * 2) + (this.complexUAW * 3);
    let TF = 0;
    for(let factor of this.questions){
      TF += (factor.rating * factor.weight);
    }
    let TCF = 0.6 + (TF/100);

    let EF = 0;
    for(let factor of this.environmentalFactors){
      EF += (factor.rating * factor.weight);
    }
    let ECF = 1.4 + (-0.03 * EF);

    this.UCP = (totalUUCW + totalUAW) * TCF * ECF
  }
}
