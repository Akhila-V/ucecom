import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome.component'

const welcomeRouting: ModuleWithProviders = RouterModule.forChild([
{path:'welcome', component: WelcomeComponent}

	]);

@NgModule({
	imports: [welcomeRouting],
	declarations: [WelcomeComponent],
	providers:[]
})

export class WelcomeModule {}