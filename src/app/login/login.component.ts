import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { User } from '../User';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( 
    private authService : AuthService,
    private location : Location
    ) { }

  ngOnInit() {
    if(this.authService.isAuthenticated){
      this.protectedRoute();
    }
    else{
      if(localStorage.getItem('currentUser')) {
        console.log('getting profile')
        this.getUserProfile();
      }
    }
  }

  user: User = {
    email: "",
    password: ""
  }
  
  async loginUser(user : User = this.user) {
    console.log(user)
    if (!user) { return; }
    await this.authService.loginUser(user)
      .subscribe( async res => {
        if(res.status == 200 ){
          localStorage.setItem('currentUser' , res.access_token);
          this.getUserProfile();
        }
        })
  }

  async getUserProfile() {
    await this.authService.getProfile()
      .subscribe( userData => {
        console.log('User ' + userData);
        this.protectedRoute();
      })
  }

  protectedRoute(): void {
    if (this.authService.isAuthenticated) this.location.go('/todos');
  }
}
