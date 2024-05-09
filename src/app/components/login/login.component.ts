import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
	router = inject(Router);
	authService = inject(AuthService);
	errorMessage: string | null = null;

	// hogy ne kelljen ! jelet írni minden adattag után --> nonNullable
	loginForm = this.formBuilder.nonNullable.group({
		// name: ['', Validators.required],
		email: ['', Validators.required, Validators.email],
		password: ['', Validators.required]
	});
	
	constructor( private formBuilder: FormBuilder ) {}
	
	
	onSubmit(): void {
		const rawForm = this.loginForm.getRawValue();
		this.authService.login(rawForm.email, rawForm.password).subscribe({
			next: () => {
				this.router.navigateByUrl("/home");
			},
			error: (error) => {
				this.errorMessage = error.code;
			}
		});
	}

	// get name() {
	// 	return this.loginForm.get('name');
	// }
	get email() {
		return this.loginForm.get('email');
	}
	get password() {
		return this.loginForm.get('password');
	}
}