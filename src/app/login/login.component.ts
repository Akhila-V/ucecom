import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html',
	styleUrls: ['../app.component.css']
})

export class LoginComponent  {
	
	title = 'app works!';
  	loginText:string = 'LOGIN';
  	username:string ="";
  	password:string ="";

  	constructor(private router: Router){

  	}

  public performLogin(event:any, username:string, password:string) :void {
    console.log(username.endsWith('a'));
  	console.log("in login",username,password,event);
  	this.router.navigateByUrl('/welcome');
  }
} 