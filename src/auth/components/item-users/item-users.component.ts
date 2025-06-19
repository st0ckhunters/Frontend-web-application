import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
//prub
import {OnInit} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-item-users',
  imports: [MatCardModule, MatButtonModule,

  MatToolbarModule, MatListModule],
  templateUrl: './item-users.component.html',
  styleUrl: './item-users.component.css'
})
export class ItemUsersComponent {

}
