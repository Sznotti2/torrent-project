import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TorrentsComponent } from './components/torrents/torrents.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [authGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'torrents',
		component: TorrentsComponent,
		canActivate: [authGuard]
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: NotFoundComponent
	},
];
