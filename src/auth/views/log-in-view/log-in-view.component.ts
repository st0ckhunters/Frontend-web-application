import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TranslatePipe} from '@ngx-translate/core';
import {MatIcon } from '@angular/material/icon';
import {Router} from "@angular/router";
import {HeaderComponent} from '../../../shared/components/header/header.component';
@Component({
  selector: 'app-log-in-view',
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
    MatIcon,
    HeaderComponent,
  ],
  templateUrl: './log-in-view.component.html',
  styleUrl: './log-in-view.component.css'
})
export class LogInViewComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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
      this.router.navigate(['/accounts'])
    }
  }
}
