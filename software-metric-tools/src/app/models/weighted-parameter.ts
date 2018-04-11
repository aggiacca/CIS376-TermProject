export class WeightedParameter{
  constructor(public name: string,
              public weightFactors: Array<number>,
              public count: number,
              public weightedTotal: number){

  }
}
