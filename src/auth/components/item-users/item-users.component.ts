import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-item-users',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './item-users.component.html',
  styleUrl: './item-users.component.css'
})
export class ItemUsersComponent {

}
