import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-view',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-up-view.component.html',
  styleUrl: './sign-up-view.component.css'
})
export class SignUpViewComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login:', email, password);
      // Aquí puedes llamar a tu servicio de autenticación
    }
  }
}
