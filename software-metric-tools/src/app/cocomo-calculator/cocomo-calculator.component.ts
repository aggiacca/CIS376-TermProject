import { Component, OnInit } from '@angular/core';

import {FunctionPointsService} from "../services/function-points-service";

@Component({
  selector: 'app-cocomo-calculator',
  templateUrl: './cocomo-calculator.component.html',
  styleUrls: ['./cocomo-calculator.component.css'],
})
export class CocomoCalculatorComponent implements OnInit {

  // old implementation
  // data = [new COCOMOLine("Basic", [new ModeLine("Organic", new PairAB(2.4,1.05)),new ModeLine("Semidetached", new PairAB(3.0, 1.12)), new ModeLine("Embedded", new PairAB(3.6,1.20))]),
  //   new COCOMOLine("Intermediate", [new ModeLine("Organic", new PairAB(3.2,1.05)),new ModeLine("Semidetached", new PairAB(3.0, 1.12)), new ModeLine("Embedded", new PairAB(2.8,1.20))]),
  //
  // ];
  // currentMode: Array<ModeLine> = this.data[0].modes;
  // currentPair: PairAB = new PairAB(0,0);

  modes = ["Basic", "Intermediate"];
  complexities = ["Organic", "Semi-detached","Embedded"];

  Errors: Array<String> = [];
  showErrors = false;


  currentModeName: String;
  currentComplexity: String;
  a: number;
  b: number;
  c = 2.5;
  d: number;
  devTime: number;
  peopleRequired: number;

  kloc = 0;
  effort = 0;

  calculationSuccess = false;

  constructor(FPservice: FunctionPointsService) {
    this.kloc = FPservice.getKLOC();
  }

  ngOnInit() {
  }

  calculateEffort(){
    this.Errors.length = 0;
    this.showErrors = false;
    this.calculationSuccess = false;

    if(this.kloc <= 0){
      this.Errors.push("S (KLOC) must greater than 0");
    }

    if(this.currentComplexity == null){
      this.Errors.push("Please select a complexity");
    }


    if(this.Errors.length == 0) {
      this.setValues();

      this.effort = this.a * (this.kloc ^ this.b);
      this.devTime = this.c * (this.effort ^ this.d);
      this.peopleRequired = this.effort / this.devTime;

      this.calculationSuccess = true;
    }else{
      this.showErrors = true;
    }
  }

  setValues(){
    if(this.currentComplexity == "Organic"){
      this.a = 2.4;
      this.b = 1.05;
      this.d = 0.38;
    }else if(this.currentComplexity == "Semi-detached"){
      this.a = 3.0;
      this.b = 1.12;
      this.d = 0.35;
    }else if(this.currentComplexity == "Embedded") {
      this.a = 3.6;
      this.b = 1.20;
      this.d = 0.32;
    }

  }

}
