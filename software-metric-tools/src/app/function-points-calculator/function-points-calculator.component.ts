import { Component, OnInit } from '@angular/core';
import {Question} from "../models/Question";
import {WeightedParameter} from "../models/weighted-parameter";
import {FunctionPointsService} from "../services/function-points-service";

@Component({
  selector: 'app-function-points-calculator',
  templateUrl: './function-points-calculator.component.html',
  styleUrls: ['./function-points-calculator.component.css'],
})
export class FunctionPointsCalculatorComponent implements OnInit {

  questions: Array<Question> = [
    new Question("Does the system require reliable backup and recovery?",0),
    new Question("Are data communication required?", 0),
    new Question("Are there distributed processing functions?",0),
    new Question("Is performance critical?", 0),
    new Question("Will the system run in an existing heavily utilized operational environment?", 0),
    new Question("Does the system require on-line data entry?", 0),
    new Question("Does the on-line data entry require input transaction to be built over multiple screens or operations?", 0),
    new Question("Are the master files updated on-line?", 0),
    new Question("Are the inputs, outputs, files, or inquiries complex?", 0),
    new Question("Is the internal processing complex?", 0),
    new Question("Is the code designed to be reusable?", 0),
    new Question("Are conversion and installation included in the design?", 0),
    new Question("Is the system designed for multiple installations in different organizations?", 0),
    new Question("Is the application designed to facilitate change and ease of use by the user?", 0)
  ];

  parameters: Array<WeightedParameter> =[
    new WeightedParameter("Number of User Inputs", [3,4,5], 0,0),
    new WeightedParameter("Number of User Outputs", [4,5,7], 0,0),
    new WeightedParameter("Number of User Inquiries", [3,4,5], 0,0),
    new WeightedParameter("Number of Files", [7,10,15], 0,0),
    new WeightedParameter("Number of External Interfaces", [5,7,10], 0,0)
  ];

  Errors: Array<String> = [];
  showErrors = false;

  questionaireTotal: number;

  numInputsCount: number;

  weightedTotal: number = 0;
  functionPoints: number = 0;

  computeSuccess = false;

  langaugeMultiplier = 0;
  loc = 0;
  kloc = 0;

  constructor(public FPservice: FunctionPointsService) { }

  ngOnInit() {
  }

  updateLOC(num: number){
    this.loc = this.functionPoints * this.langaugeMultiplier;
    this.kloc = this.loc / 1000;
    this.FPservice.setKLOC(this.kloc);
  }
  calculateFunctionPoints(){
    // reset errors
    this.Errors.length = 0;
    this.showErrors = false;
    this.computeSuccess = false;
    this.weightedTotal = 0;

    this.questionaireTotal = 0;

    for(let j= 0; j < this.questions.length; j++){
      if(this.questions[j].rating >=0 && this.questions[j].rating <=5){
        this.questionaireTotal += this.questions[j].rating
      }else{
        this.Errors.push("Count for Questionnaire "+ (j+1) +" must be between 0 and 5 inclusive.")
      }
    }

    for(let i= 0; i < this.parameters.length; i++) {
      if (this.parameters[i].count >= 0) {
        if (this.parameters[i].weightedTotal != 0) {
          this.weightedTotal += this.parameters[i].count * this.parameters[i].weightedTotal;
        } else {
          this.Errors.push("Please select a weight for Parameter " + (i + 1) + ".")
        }
      } else {
        this.Errors.push("Count for Parameter" + (i + 1) + " must be greater than zero.")
      }
    }

     if(this.Errors.length == 0) {
       this.functionPoints = Math.round(this.weightedTotal * (0.65 + (0.01 * this.questionaireTotal)));
       this.computeSuccess = true;

     }else{
      this.showErrors = true;
    }
  }


}
