import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';

const loginRouting: ModuleWithProviders =  RouterModule.forChild([
	{path: '', component: LoginComponent}
	]);


@NgModule({
	imports:[loginRouting, FormsModule],
    declarations:[LoginComponent],
 	providers:[]
})
export class LoginModule { }
