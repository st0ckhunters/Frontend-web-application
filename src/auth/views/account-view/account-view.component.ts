import { Component } from '@angular/core';
import {ItemUsersComponent} from '../../components/item-users/item-users.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-account-view',
  imports: [
    ItemUsersComponent,
    TranslatePipe
  ],
  templateUrl: './account-view.component.html',
  styleUrl: './account-view.component.css'
})
export class AccountViewComponent {

}
