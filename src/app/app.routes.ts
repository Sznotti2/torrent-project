import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TorrentsComponent } from './components/torrents/torrents.component';
import { UploadComponent } from './components/upload/upload.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
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
		component: TorrentsComponent
	},
	{
		path: 'upload',
		component: UploadComponent
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: NotFoundComponent
	},
];
