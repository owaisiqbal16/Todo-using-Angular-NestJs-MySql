import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService : AuthService ) { }

  ngOnInit() {
  }

  user: User = {
    email: "",
    password: ""
  }
  
  loginUser(user : User = this.user): void {
    console.log("Button pressed")
    console.log(user)
    if (!user) { return; console.log("No user given") }
    this.authService.loginUser(user)
    .subscribe( data => {
      console.log(data);
    })
  }
}
