import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-button',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslateModule
  ],
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent {
  constructor(private router: Router) {}

  openConfig() {
    // Navigate to configuration page
    this.router.navigate(['/configuration']);
  }

  logout() {
    // Implement logout logic here
    // For example, clear auth token and redirect to login
    this.router.navigate(['/login']);
  }
}
