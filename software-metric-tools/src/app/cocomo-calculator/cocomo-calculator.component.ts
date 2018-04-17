import { Component, OnInit } from '@angular/core';
import {COCOMOLine} from "../models/COCOMO-line";
import {ModeLine} from "../models/Mode-line";
import {PairAB} from "../models/PairAB";

@Component({
  selector: 'app-cocomo-calculator',
  templateUrl: './cocomo-calculator.component.html',
  styleUrls: ['./cocomo-calculator.component.css']
})
export class CocomoCalculatorComponent implements OnInit {

  data = [new COCOMOLine("Basic", [new ModeLine("Organic", new PairAB(2.4,1.05)),new ModeLine("Semidetached", new PairAB(3.0, 1.12)), new ModeLine("Embedded", new PairAB(3.6,1.20))]),
    new COCOMOLine("Intermediate", [new ModeLine("Organic", new PairAB(3.2,1.05)),new ModeLine("Semidetached", new PairAB(3.0, 1.12)), new ModeLine("Embedded", new PairAB(2.8,1.20))]),

  ];

  currentModeName: String;
  currentMode: Array<ModeLine> = this.data[0].modes;
  currentComplexity: PairAB;
  currentPair: PairAB = new PairAB(0,0);

  constructor() { }

  ngOnInit() {
  }

  setPair(complexStr: String){
    for (let mode of this.currentMode){
      if(mode.name == complexStr){
        this.currentPair = mode.values
      }
    }
  }

  setMode(modeStr: String){
    for (let COCOMOline of this.data){
      if(COCOMOline.name == this.currentModeName){
        this.currentMode = COCOMOline.modes
      }
    }
  }

  calculateEffort(){

  }

}
