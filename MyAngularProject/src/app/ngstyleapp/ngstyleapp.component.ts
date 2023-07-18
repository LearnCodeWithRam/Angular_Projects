import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-ngstyleapp',
  templateUrl: './ngstyleapp.component.html',
  styleUrls: ['./ngstyleapp.component.css']
})
export class NgstyleappComponent {

  myForm: FormGroup;
  myStyle: {} = { };
  textdata:any;
  constructor() {
    this.myForm = new FormGroup({
      text: new FormControl(''),
      bgColor: new FormControl(''),
      fontSize: new FormControl(''),
      color: new FormControl(''),
    });
  }
  myFunction(data: any)
   {
   this.myStyle = { 'background-color' : data.bgColor , 'font-size' : data.fontSize, 'color' : data.color}; 
    this.textdata=data.text;
  }

}
