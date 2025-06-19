import { Component } from '@angular/core';
import {ItemUsersComponent} from '../../components/item-users/item-users.component';
import {TranslatePipe} from '@ngx-translate/core';

import { AccountService } from '../../services/account.service';
import { User } from '../../models/users';


@Component({
  selector: 'app-account-view',
  standalone: true,
  imports: [
    ItemUsersComponent,
    TranslatePipe
  ],
  templateUrl: './account-view.component.html',
  styleUrl: './account-view.component.css'
})
export class AccountViewComponent {
  //dsadas
  users: User[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }
  //dasdasa
}
