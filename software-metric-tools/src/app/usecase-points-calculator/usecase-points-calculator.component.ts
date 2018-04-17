import { Component, OnInit } from '@angular/core';
import {Question} from "../models/Question";

@Component({
  selector: 'app-usecase-points-calculator',
  templateUrl: './usecase-points-calculator.component.html',
  styleUrls: ['./usecase-points-calculator.component.css']
})
export class UsecasePointsCalculatorComponent implements OnInit {

  simpleUUCW: number = 0;
  averageUUCW: number = 0;
  complexUUCW: number = 0;

  simpleUAW: number = 0;
  averageUAW: number = 0;
  complexUAW: number = 0;

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

  UCP: number = 0;
  totalUUCW: number = 0;
  totalUAW: number = 0;
  TCF: number = 0;
  ECF: number = 0;

  hoursPerPoint: number = 0;
  totalHours = 0;
  personMonths = 0;
  durationMonths = 0;

  calculationSuccess = false;
  Errors: Array<String> = [];
  showErrors = false;

  constructor() { }

  ngOnInit() {
  }

  updateHours(){
    this.totalHours = this.UCP * this.hoursPerPoint;
    this.personMonths = this.totalHours / 173.333;
    this.durationMonths = (this.personMonths ** 0.38) * 2.5;
  }

  checkErrors(){
    if(this.simpleUUCW < 0 || this.averageUUCW < 0 ||this.complexUUCW < 0 ){
      this.Errors.push("UUCW values cannot be negative");
    }

    if(this.simpleUAW < 0 || this.averageUAW < 0 ||this.complexUAW < 0 ){
      this.Errors.push("UAW values cannot be negative");
    }

    for(let factor of this.questions){
      if(factor.rating < 0 || factor.rating > 5){
        this.Errors.push("TCF factors must be between 0 and 5 inclusive.");
        break;
      }
    }

    for(let factor of this.environmentalFactors){
      if(factor.rating < 0 || factor.rating > 5){
        this.Errors.push("ECF factors must be between 0 and 5 inclusive.");
        break;
      }
    }

  }

  calculateUseCasePoint(){
    this.Errors.length = 0;
    this.showErrors = false;
    this.calculationSuccess = false;

    this.checkErrors();

    if(this.Errors.length == 0) {
      this.totalUUCW = (this.simpleUUCW * 5) + (this.averageUUCW * 10) + (this.complexUUCW * 15);
      this.totalUAW = (this.simpleUAW * 1) + (this.averageUAW * 2) + (this.complexUAW * 3);
      let TF = 0;
      for (let factor of this.questions) {
        TF += (factor.rating * factor.weight);
      }
      this.TCF = 0.6 + (TF / 100);

      let EF = 0;
      for (let factor of this.environmentalFactors) {
        EF += (factor.rating * factor.weight);
      }
      this.ECF = 1.4 + (-0.03 * EF);

      this.UCP = Math.round((this.totalUUCW + this.totalUAW) * this.TCF * this.ECF);
      this.calculationSuccess = true;
    }else{
      this.showErrors = true;
    }
  }
}
