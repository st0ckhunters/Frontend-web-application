// src/app/auth/views/log-in-view/log-in-view.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
    HeaderComponent,
    NgIf
  ],
  templateUrl: './log-in-view.component.html',
  styleUrl: './log-in-view.component.css'
})
export class LogInViewComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (success) => {
          if (success) {
            this.router.navigate(['/accounts']);
          } else {
            this.errorMessage = 'Correo o contraseña incorrectos';
          }
        },
        error: () => {
          this.errorMessage = 'Error al iniciar sesión. Intenta de nuevo.';
        }
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos correctamente';
    }
  }
}
