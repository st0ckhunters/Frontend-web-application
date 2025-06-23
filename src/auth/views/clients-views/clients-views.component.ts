import { Component,OnInit } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {Clients} from '../../models/clients';
import {ClientsService} from '../../services/clients.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {NavBarComponent} from '../../../shared/components/nav-bar/nav-bar.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-clients-views',
  imports: [MatCard, FormsModule, NgForOf, HeaderComponent, NavBarComponent, RouterLink],
  templateUrl: './clients-views.component.html',
  styleUrl: './clients-views.component.css'
})
export class ClientsViewsComponent {
  clients: Clients[] = [];

  newclient: Clients={
    first_name:'',
    last_name: '',
    company: ''
  };
  constructor(private clientsService: ClientsService) {
  }

  ngOnInit(): void {
    this.clientsService.getAllclients().subscribe({
      next: (data: Clients[]) => {
        this.clients = data;
        console.log('Usuarios cargados:', this.clients);
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      },
    });
  }

  addClient() {
    if (!this.newclient.first_name || !this.newclient.last_name) return;
    this.clientsService.createclient(this.newclient).subscribe(client => {
      this.clients.push(client);
      this.newclient={first_name:'', last_name:'',company:'' };
    });
  }

}
