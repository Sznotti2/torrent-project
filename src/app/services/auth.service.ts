import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, user } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	firebaseAuth = inject(Auth);
	user$ = user(this.firebaseAuth);
	currentUserSig = signal<UserInterface | null | undefined>(undefined);

	constructor() { }

	register(email: string, username: string, password: string): Observable<void> {
		const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
			.then(response => updateProfile(response.user, { displayName: username }));
		
		return from(promise);
	}

	login(email: string, password: string): Observable<void> {
		const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password)
			.then(() => {}); // typescript ettől csöndbe marad
		return from(promise);
	}
}


// resources
// https://www.youtube.com/watch?v=586O934xrhQ
// https://www.youtube.com/watch?v=0ihoworuX4o