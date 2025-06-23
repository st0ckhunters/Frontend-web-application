import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Clients } from '../../models/clients';
import { ClientsService } from '../../services/clients.service';
import { FormsModule } from '@angular/forms';
import {DatePipe, NgForOf} from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients-views',
  standalone: true,
  imports: [MatCardModule, FormsModule, NgForOf, HeaderComponent, NavBarComponent, RouterLink, DatePipe],
  templateUrl: './clients-views.component.html',
  styleUrls: ['./clients-views.component.css']
})
export class ClientsViewsComponent implements OnInit {
  clients: Clients[] = [];
  newclient: Clients = {
    first_name: '',
    last_name: '',
    company: '',
    phone: undefined,
    email: '',
    dni: '',
    status: '',
    registration_date: undefined,
    created_at: undefined
  };

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.getAllclients().subscribe({
      next: (data: Clients[]) => {
        this.clients = data;
        console.log('Usuarios cargados:', this.clients);
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }

  addClient(): void {
    if (!this.newclient.first_name || !this.newclient.last_name || !this.newclient.company) {
      console.error('Campos obligatorios faltantes');
      return;
    }
    this.clientsService.createclient(this.newclient).subscribe({
      next: (client) => {
        this.clients.push(client);
        this.newclient = {
          first_name: '',
          last_name: '',
          company: '',
          phone: undefined,
          email: '',
          dni: '',
          status: '',
          registration_date: undefined,
          created_at: undefined
        };
      },
      error: (err) => {
        console.error('Error al crear cliente:', err);
      }
    });
  }
}
