import { Component, OnInit } from '@angular/core';
import {Question} from "../models/Question";

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
    //     new Question("Will the system run in an existing heavily utilized operational environment?",
    // "Does the system require on-line data entry?",
    // "Does the on-line data entry require input transaction to be built over multiple screens or operations?",
    // "Are the master files updated on-line?",
    // "Are the inputs, outputs, files, or inquiries complex?",
    // "Is the internal processing complex?",
    // "Is the code designed to be reusable?",
    // "Are conversion and installation included in the design?",
    // "Is the system designed for multiple installations in different organizations?",
    // "Is the application designed to facilitate change and ease of use by the user?"
  ];
  question0: number = 0;
  question1: number= 1;
  question2: number;
  question3: number;
  question4: number;
  question5: number;
  question6: number;
  question7: number;
  question8: number;
  question9: number;
  question10: number;
  question11: number;
  question12: number;
  question13: number;
  question14: number;

  questionaireTotal: number;

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
