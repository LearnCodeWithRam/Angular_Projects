import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-serviceapp',
  templateUrl: './serviceapp.component.html',
  styleUrls: ['./serviceapp.component.css']
})
export class ServiceappComponent  {


  arr1:number[]=[2,5,8,1,9,4,8];
  arr2:string[]=['Vishwajeet','Ramanuj','Ajayant','Jaya Shonker'];
  constructor()
   {}

   name: string = 'valan arasu';
  date: Date = new Date();
}
