import { Component, OnInit } from '@angular/core';
import {Question} from "../models/Question";

@Component({
  selector: 'app-qsdi-calculator',
  templateUrl: './qsdi-calculator.component.html',
  styleUrls: ['./qsdi-calculator.component.css']
})
export class QsdiCalculatorComponent implements OnInit {

  sValues: Array<Question> = [
    new Question("The total number of modules",0),
    new Question("The number of modules that either rely on correct data input, or produce data to be used elsewhere", 0),
    new Question("The number of modules that depend on prior processing",0),
    new Question("The number of database items including all attributes attached", 0),
    new Question("The number of unique database items", 0),
    new Question("The number of individual database objects", 0),
    new Question("The number of modules with a single entry and single exit", 0)
  ];

  dValues: Array<Question> = [
    new Question("Program Structure",0),
    new Question("Module Independence", 0),
    new Question("Modules not dependent on prior processing",0),
    new Question("Database size", 0),
    new Question("Database compartmentalization", 0),
    new Question("Module entrance/exit characteristic", 0),

  ];

  d1ValueChecked = false;

  dsqi: number = 0;

  sErrors: Array<String> = [];

  showDValues = false;
  showSErrors = false;
  weightError = false;
  calculationSuccess = false;

  constructor() { }

  ngOnInit() {
  }

  setSValues(){
    // reset errors
    this.sErrors.length = 0;
    this.showSErrors = false;
    this.calculationSuccess = false;

    if(!(this.sValues[0].rating > 0)){
      this.sErrors.push("S1 must be greater than 0");
    }

    if(!(this.sValues[3].rating > 0)){
      this.sErrors.push("S4 must be greater than 0");
    }

    if(this.sValues[0].rating <= this.sValues[1].rating){
      this.sErrors.push("S1 must be greater than S2");
    }

    if(this.sValues[0].rating <= this.sValues[2].rating){
      this.sErrors.push("S1 must be greater than S3");
    }

    if(this.sValues[3].rating <= this.sValues[4].rating){
      this.sErrors.push("S4 must be greater than S5");
    }

    if(this.sValues[3].rating <= this.sValues[5].rating){
      this.sErrors.push("S4 must be greater than S6");
    }

    if(this.sValues[0].rating <= this.sValues[6].rating){
      this.sErrors.push("S1 must be greater than S7");
    }

    if(this.sErrors.length > 0){
      this.showSErrors = true;
      this.showDValues = false;
    }

    if(!this.showSErrors){
      if(this.d1ValueChecked){
        this.dValues[0].rating = 1
      }

      this.dValues[1].rating = (1 - (this.sValues[1].rating / this.sValues[0].rating));
      this.dValues[2].rating = (1 - (this.sValues[2].rating / this.sValues[0].rating));
      this.dValues[3].rating = (1 - (this.sValues[4].rating / this.sValues[3].rating));
      this.dValues[4].rating = (1 - (this.sValues[5].rating / this.sValues[3].rating));
      this.dValues[5].rating = (1 - (this.sValues[6].rating / this.sValues[0].rating));

      this.showDValues = true;
    }


  }

  calculateDSQI(){
    this.weightError = false;
    this.calculationSuccess = false;

    let totalWeight = 0;
    for(let dValue of this.dValues){
      totalWeight += dValue.weight;
    }

    if(totalWeight == 100){
      for(let dValue of this.dValues){
        this.dsqi += (dValue.rating * (dValue.weight/100));
      }

      this.dsqi = this.round(this.dsqi,3);
      this.calculationSuccess = true;

    }else{
      this.weightError = true;
    }

  }

  round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }


}
