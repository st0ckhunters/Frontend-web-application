import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import { SalesService } from '../../services/sales.service';
import { Sale } from '../../models/sales';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sales-view',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NavBarComponent,
    TranslatePipe,
    DatePipe
  ],
  templateUrl: './sales-view.component.html',
  styleUrls: ['./sales-view.component.css']
})
export class SalesViewComponent implements OnInit {
  sales: Sale[] = [];
  filteredSales: Sale[] = [];
  searchTerm: string = '';
  showForm: boolean = false;
  newSale: Sale = {
    id: '',
    sale_date: new Date().toISOString().split('T')[0],
    product_id: '',
    lot_id: '',
    quantity: 0,
    status: '',
    customer_id: '',
    user_id: '',
    location_id: '',
    created_at: new Date().toISOString()
  };
  editSale: Sale | null = null;
  errorMessage: string = '';

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    this.salesService.getAllSales().subscribe({
      next: (data) => {
        this.sales = data;
        this.filteredSales = [...this.sales];
        console.log('Ventas cargadas:', this.sales);
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar ventas: ' + err.message;
        console.error('Error al cargar ventas:', err);
      }
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.editSale = null;
    this.newSale = {
      id: '',
      sale_date: new Date().toISOString().split('T')[0],
      product_id: '',
      lot_id: '',
      quantity: 0,
      status: '',
      customer_id: '',
      user_id: '',
      location_id: '',
      created_at: new Date().toISOString()
    };
    this.errorMessage = '';
  }

  addSale(): void {
    if (!this.newSale.product_id || !this.newSale.customer_id || !this.newSale.quantity || !this.newSale.status) {
      this.errorMessage = 'Producto, cliente, cantidad y estado son obligatorios';
      return;
    }

    this.salesService.addSale(this.newSale).subscribe({
      next: (response) => {
        this.sales = [...this.sales, response];
        this.filteredSales = [...this.sales];
        this.toggleForm();
        console.log('Venta añadida:', response);
      },
      error: (err) => {
        this.errorMessage = 'Error al añadir venta: ' + err.message;
        console.error('Error al añadir venta:', err);
      }
    });
  }

  editSaleForm(sale: Sale): void {
    this.editSale = { ...sale };
    this.newSale = { ...sale };
    this.showForm = true;
    this.errorMessage = '';
  }

  updateSale(): void {
    if (!this.editSale || !this.newSale.product_id || !this.newSale.customer_id || !this.newSale.quantity || !this.newSale.status) {
      this.errorMessage = 'Producto, cliente, cantidad y estado son obligatorios';
      return;
    }

    this.salesService.updateSale(this.editSale.id, this.newSale).subscribe({
      next: (response) => {
        this.sales = this.sales.map(s => s.id === response.id ? response : s);
        this.filteredSales = [...this.sales];
        this.toggleForm();
        console.log('Venta actualizada:', response);
      },
      error: (err) => {
        this.errorMessage = 'Error al actualizar venta: ' + err.message;
        console.error('Error al actualizar venta:', err);
      }
    });
  }

  deleteSale(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta venta?')) {
      this.salesService.deleteSale(id).subscribe({
        next: () => {
          this.sales = this.sales.filter(sale => sale.id !== id);
          this.filteredSales = [...this.sales];
          console.log('Venta eliminada:', id);
        },
        error: (err) => {
          this.errorMessage = 'Error al eliminar venta: ' + err.message;
          console.error('Error al eliminar venta:', err);
        }
      });
    }
  }

  onSearch(): void {
    this.filteredSales = this.sales.filter(sale =>
      sale.product_id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      sale.customer_id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      sale.sale_date.includes(this.searchTerm) ||
      sale.status.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
