import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Clients } from '../../models/clients';
import { ClientsService } from '../../services/clients.service';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClientDetailModalComponent } from '../../../shared/components/modal/client-detail-modal/client-detail-modal.component';

@Component({
  selector: 'app-clients-views',
  standalone: true,
  imports: [MatCardModule, FormsModule, NgForOf, HeaderComponent, NavBarComponent, RouterLink, DatePipe, NgIf],
  templateUrl: './clients-views.component.html',
  styleUrls: ['./clients-views.component.css']
})
export class ClientsViewsComponent implements OnInit {
  clients: Clients[] = [];
  filteredClients: Clients[] = []; // Nueva lista filtrada
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
  searchTerm: string = ''; // Para el input de búsqueda

  constructor(private clientsService: ClientsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientsService.getAllclients().subscribe({
      next: (data: Clients[]) => {
        this.clients = data;
        this.filteredClients = data; // Inicializar filteredClients con todos los clientes
        console.log('Usuarios cargados:', this.clients);
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }

  filterClients(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredClients = this.clients.filter(client =>
      (client.first_name?.toLowerCase() || '').includes(term) ||
      (client.last_name?.toLowerCase() || '').includes(term)
    );
  }

  addClient(): void {
    if (!this.newclient.first_name || !this.newclient.last_name || !this.newclient.company) {
      console.error('Campos obligatorios faltantes');
      return;
    }
    this.clientsService.createclient(this.newclient).subscribe({
      next: (client) => {
        this.clients.push(client);
        this.filteredClients = this.clients.slice(); // Actualizar lista filtrada
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

  openClientDetails(client: Clients): void {
    this.dialog.open(ClientDetailModalComponent, {
      width: '600px',
      data: client
    });
  }
}
