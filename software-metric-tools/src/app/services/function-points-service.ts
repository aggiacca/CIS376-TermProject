import {Injectable} from '@angular/core';


@Injectable()
export class FunctionPointsService {
  KLOC: number = 0;

  constructor() {}

  setKLOC(num: number){
    this.KLOC = num;
  }

  getKLOC(): number{
    return this.KLOC;
  }
}
