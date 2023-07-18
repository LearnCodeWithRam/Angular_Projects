import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }
  getFactorial(n:number)
  {  let fact: number=1;
    let i: number;
      for(i=1;i<=n;i++)
      {
         fact=(fact*i);
      }
      return fact;
  }
}
