import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

  constructor() { }

  myFunction(data: any) {
    alert(data.name + "\n" + data.email + "\n" + data.age + "\n" + data.mobileNo + "\n" + data.country);
  }    

}
