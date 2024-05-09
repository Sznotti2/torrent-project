import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD16yAztFYLbTkHdgg1jr9hysW0k0WoTfA",
	authDomain: "ng-torrent-site.firebaseapp.com",
	projectId: "ng-torrent-site",
	storageBucket: "ng-torrent-site.appspot.com",
	messagingSenderId: "384224161934",
	appId: "1:384224161934:web:7ad9179cdee0e3754cd9df"
};

export const appConfig: ApplicationConfig = {
  	providers: [
		provideRouter(routes),
		provideAnimationsAsync(),
		provideHttpClient(),
		importProvidersFrom([
			provideFirebaseApp(() => initializeApp(firebaseConfig)),
			provideAuth(() => getAuth())
		])
	]
};
