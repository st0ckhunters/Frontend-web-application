import { Component, OnInit } from '@angular/core';
import {ItemUsersComponent} from '../../components/item-users/item-users.component';
import {TranslatePipe} from '@ngx-translate/core';

import { AccountService } from '../../services/account.service';
import { User } from '../../models/users';
import {NgForOf} from '@angular/common';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {NavBarComponent} from '../../../shared/components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-account-view',
  standalone: true,
  imports: [
    ItemUsersComponent,
    TranslatePipe,
    NgForOf,
    HeaderComponent,
    NavBarComponent,
  ],
  templateUrl: './account-view.component.html',
  styleUrl: './account-view.component.css'
})
export class AccountViewComponent {
  //dsadas
  users: User[] = []; // Define la propiedad users como un array de User

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data; // Asigna los datos obtenidos a la propiedad users
        console.log('Usuarios cargados:', this.users); // Para depuración
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }
  //dasdasa
}
