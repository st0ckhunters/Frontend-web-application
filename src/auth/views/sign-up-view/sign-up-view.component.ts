// src/app/auth/views/sign-up-view/sign-up-view.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { NgIf } from '@angular/common';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sign-up-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
    HeaderComponent,
    NgIf
  ],
  templateUrl: './sign-up-view.component.html',
  styleUrl: './sign-up-view.component.css'
})
export class SignUpViewComponent {
  registerForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, lastName, email, password } = this.registerForm.value;
      this.authService.register({ name, lastName, email, password }).subscribe({
        next: (success) => {
          if (success) {
            this.router.navigate(['/login']); // Redirigir a login tras registro exitoso
          } else {
            this.errorMessage = 'El correo ya está registrado';
          }
        },
        error: () => {
          this.errorMessage = 'Error al registrar. Intenta de nuevo.';
        }
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos correctamente';
    }
  }
}
