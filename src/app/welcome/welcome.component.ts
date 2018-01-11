import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
	selector: 'welcome-component',
	templateUrl: 'welcome.component.html'
})

export class WelcomeComponent  {
	str: string = "honey";
	bool : boolean;
	
	constructor(private router: Router) {}

	public startQuiz() : void {
		
		this.router.navigateByUrl('/quizpage');
	}
}