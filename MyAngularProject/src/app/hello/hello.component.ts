import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent  {

  myStyle: {} = { 'font-weight' : 'bold' , 'color' : 'blue'};
 
  myClass: string = 'myClass';
  result: number=0;
  constructor(private clc: CalculatorService) {
     //this.myStyle = { 'font-weight' : 'bold' , 'color' : 'blue'}; 
     //this.myClass = 'myClass';
     this.result =clc.getFactorial(20);
   }

}
