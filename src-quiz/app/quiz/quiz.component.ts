import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {QuizService} from './quiz.service';
import {QuestionsList} from '../model/quiz.model';
import {OptionModel} from '../model/option.model';
import {QuestionModel} from '../model/question.model';

@Component({
	selector: 'quiz-component',
	templateUrl: 'quiz.component.html'
})

export class QuizComponent implements OnInit {
	questions : QuestionsList;
	currentQuestion : QuestionModel;
	question : string;
	round : number;
	prizeMoney: number;
	options : OptionModel;
	optionsArray: Array<string> = [];

	public prizeMoneys = [ {
			"prize" : 15000,
			"round" : 15
		}, {
			"prize" : 14000,
			"round" : 14
		}, {
			"prize" : 13000,
			"round" : 13
		}, {
			"prize" : 12000,
			"round" : 12
		}, {
			"prize" : 11000,
			"round" : 11
		}, {
			"prize" : 10000,
			"round" : 10
		}, {
			"prize" : 9000,
			"round" : 9
		}, {
			"prize" : 8000,
			"round" : 8
		}, {
			"prize" : 7000,
			"round" : 7
		}, {
			"prize" : 6000,
			"round" : 6
		}, {
			"prize" : 5000,
			"round" : 5
		}, {
			"prize" : 4000,
			"round" : 4
		}, {
			"prize" : 3000,
			"round" : 3
		}, {
			"prize" : 2000,
			"round" : 2
		}, {
			"prize" : 1000,
			"round" : 1
		} ]

	
	constructor(private router: Router,
		private quizService : QuizService) {}

	ngOnInit() {
		this.quizService.get("../data/questions1.json", null).subscribe(data =>{
			console.log("data is:::",data.QuestionsList);
			this.questions = data;
			console.log("data 1 is:::",data.QuestionsList[0]);
			this.currentQuestion = data.QuestionsList[0];
			this.question = data.QuestionsList[0].Question;
			this.round = data.QuestionsList[0].Round;
			this.prizeMoney = data.QuestionsList[0].priceMoney;
			this.options = data.QuestionsList[0].Options[0];
			this.optionsArray = Object.keys(this.options);
			console.log("opetions are ::", this.optionsArray);
		});

		console.log("prizeMoney is:::", this.prizeMoneys);
	}

	keys() : Array<string> {
		return Object.keys(this.options);
	}	
}