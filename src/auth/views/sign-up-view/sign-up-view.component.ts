import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './sign-up-view.component.html',
  styleUrl: './sign-up-view.component.css'
})
export class SignUpViewComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, lastName, email, password } = this.registerForm.value;
      console.log('Registro:', { name, lastName, email, password });
      // Aquí puedes llamar al servicio de registro
      this.router.navigate(['/accounts'])
    } else {
      console.warn('Formulario inválido');
    }
  }
}
