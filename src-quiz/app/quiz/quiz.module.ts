import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {QuizComponent} from './quiz.component';
import {QuizService} from './quiz.service';

const quizRouting: ModuleWithProviders =  RouterModule.forChild([
	{path: 'quizpage', component: QuizComponent}
	]);


@NgModule({
	imports:[quizRouting, FormsModule, CommonModule,BrowserModule],
    declarations:[QuizComponent],
 	providers:[QuizService]
})
export class QuizModule { }
