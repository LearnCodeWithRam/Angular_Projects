import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent {

  flag: boolean;
  vechile: string[];
  selectedVechile: string = '';
  constructor() {
      this.flag = true;
      this.vechile = ['Two Wheeler', 'Three Wheeler', 'Four Wheeler'];
   }
 
   showHideDiv(){
     this.flag = ! this.flag;
   }
 
   setSelectedVechile(v: string){
      this.selectedVechile = v;
   }

}
