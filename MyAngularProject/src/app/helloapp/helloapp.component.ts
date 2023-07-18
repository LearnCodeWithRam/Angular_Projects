import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloapp',
  templateUrl: './helloapp.component.html',
  styleUrls: ['./helloapp.component.css']
})
export class HelloappComponent {
name: string;
age: number;
salary: number;
displayimg: string;
displayimg1: string;
wt: string;
ht: string;

  constructor() 
  { 
this.name="Ajayant";
this.age=23;
this.salary=23000.67;
this.displayimg="../assets/bird1.jpg";
this.displayimg1="../assets/wird2.png";
this.wt="200px";
this.ht="200px";
  }
getSum(a:number,b:number)
{
  return a+b;
}
changeName()
{
  this.name="Ramanuj";
}

}
