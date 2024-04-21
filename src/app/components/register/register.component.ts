import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
	router = inject(Router);
	authService = inject(AuthService);
	errorMessage: string | null = null;

	// hogy ne kelljen ! jelet írni minden adattag után --> nonNullable
	registerForm = this.fb.nonNullable.group({
		name: ['', Validators.required],
		email: ['', Validators.required, Validators.email],
		password: ['', Validators.required, Validators.minLength(6)]
	})

	constructor(private fb: FormBuilder) { }

	onSubmit(): void {
		const rawForm = this.registerForm.getRawValue();
		this.authService.register(rawForm.email, rawForm.name, rawForm.password).subscribe({
			next: () => {
				this.router.navigateByUrl("/home");
			},
			error: (error) => {
				this.errorMessage = error.code;
			}
		});
	}

	get name() {
		return this.registerForm.get('name');
	}
	get email() {
		return this.registerForm.get('email');
	}
	get password() {
		return this.registerForm.get('password');
	}
}
