import { Component, OnInit } from '@angular/core';
import { userApi } from '../../Services/api/userApi';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users!: Array<{id:number, name:string, email:string, gender:string, status:string}>

  constructor(private httpClient: userApi) { 
    const user = {
      name: "UserNou",
      gender: "female",
      email: "email@local",
      status: "active"
    }

    this.httpClient.create(user).subscribe{ data => {console.log(data)}}

    this.httpClient.getUsers().subscribe(users => {
      this.users = users;
    })
  }



}
