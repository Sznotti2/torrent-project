import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

	loginForm = this.formBuilder.group({
		name: ['', Validators.required],
		email: ['', Validators.required, Validators.email],
		password: ['', Validators.required]
	});
	
	constructor(
		private formBuilder: FormBuilder,
	) {}
	
	onSubmit() {
		console.log(this.loginForm.value);
	}

	get email() {
		return this.loginForm.get('email');
	}
	get name() {
		return this.loginForm.get('name');
	}
	get password() {
		return this.loginForm.get('password');
	}
}