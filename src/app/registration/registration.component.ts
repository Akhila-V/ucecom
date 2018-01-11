import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
	selector: 'register-component',
	templateUrl: 'registration.component.html',
	styleUrls: ['./registration.component.css']
})

export class RegistrationComponent  {
	
	username:string ="";
	
	constructor(private router: Router) {}

	// public startQuiz() : void {
		
	// 	this.router.navigateByUrl('/registration');
	// }
}