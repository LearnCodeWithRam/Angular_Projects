import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-rf-form',
  templateUrl: './rf-form.component.html',
  styleUrls: ['./rf-form.component.css']
})
export class RfFormComponent  {

  myForm: FormGroup;
 
  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('required'),
      email: new FormControl(''),
      age: new FormControl(''),
      mobileNo: new FormControl(''),
    });
  }
  myFunction(data: any) {
    alert(data.name + "\n" + data.email + "\n" + data.age + "\n" + data.mobileNo);
  }
}