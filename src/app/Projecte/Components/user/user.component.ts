import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/Entities/user';
import { userApi } from '../../Services/api/userApi';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users!: Array<{id:number, name:string, email:string, gender:string, status:string}>
  //user!: {name:string, email:string, gender:string, status:string}
  user:User = new User();

  constructor(private httpClient: userApi) { 
    
    this.user = new User();

    /*this.httpClient.create(user).subscribe( data => {console.log(data); })

    this.httpClient.getUsers().subscribe(users => {
      this.users = users;
    });*/

    this.getAllUsers();
  }

  getAllUsers() {
    this.httpClient.getUsers().subscribe(user => {
      this.users = user;
    })
  }
  
  guardar() {
    this.httpClient.create(this.user).subscribe(() => {
      this.getAllUsers    
    });
  }
}
