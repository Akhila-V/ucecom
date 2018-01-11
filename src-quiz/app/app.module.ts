import { BrowserModule } from '@angular/platform-browser';
import  {RouterModule} from '@angular/router';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LoginModule} from './login/login.module';
import {WelcomeModule} from './welcome/welcome.module';
import {QuizModule} from './quiz/quiz.module';
import {QuizService} from './quiz/quiz.service';

import { AppComponent } from './app.component';
//import {WelcomeComponent} from './welcome/welcome.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent
  //  WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    QuizModule,
    WelcomeModule,
    rootRouting
    // RouterModule.forRoot([
    // {path:"welcome", component: WelcomeComponent },
    // {path:"", component: AppComponent},
    // {path:"**", component: AppComponent}
    // ])
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
