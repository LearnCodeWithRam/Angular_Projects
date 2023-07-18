import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

   public userData: any[] = [];
constructor(private list: UserService) { 
    this.userData = list.getList();
}
  }
      

