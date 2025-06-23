import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
//prub
import {OnInit} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { User } from '../../models/users';
import {TranslatePipe} from '@ngx-translate/core';
import {DatePipe, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-item-users',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,

    MatToolbarModule, MatListModule, TranslatePipe, DatePipe, NgIf, RouterLink],
  templateUrl: './item-users.component.html',
  styleUrl: './item-users.component.css'
})
export class ItemUsersComponent {
  @Input() user!: User;
}
