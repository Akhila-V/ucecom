import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {RegistrationComponent} from './registration.component';

const registrationRouting: ModuleWithProviders =  RouterModule.forChild([
	{path: 'registration', component: RegistrationComponent}
	]);


@NgModule({
	imports:[registrationRouting, FormsModule],
    declarations:[RegistrationComponent],
 	providers:[]
})
export class RegistrationModule { }
