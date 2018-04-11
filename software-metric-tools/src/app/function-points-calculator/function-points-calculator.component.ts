import { Component, OnInit } from '@angular/core';
import {Question} from "../models/Question";
import {WeightedParameter} from "../models/weighted-parameter";

@Component({
  selector: 'app-function-points-calculator',
  templateUrl: './function-points-calculator.component.html',
  styleUrls: ['./function-points-calculator.component.css']
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

  questionaireTotal: number;

  numInputsCount: number;

  constructor() { }

  ngOnInit() {
  }

  totalQuestions(){
    this.questionaireTotal = 0;

    for(let question of this.questions){
      this.questionaireTotal += question.rating
    }
  }

  trackByIndex(index: number, value: number) {
    return index;
  }
}
