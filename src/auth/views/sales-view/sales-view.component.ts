import { Component, OnInit } from '@angular/core';
import { SalesService} from '../../services/sales.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {NavBarComponent} from '../../../shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-sales-view',
  templateUrl: './sales-view.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NavBarComponent
  ],
  styleUrls: ['./sales-view.component.css']
})
export class SalesViewComponent implements OnInit {
  sales: any[] = [];
  filteredSales: any[] = [];
  searchTerm: string = '';

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    this.salesService.getAllProducts().subscribe(data => {
      this.sales = data;
      this.filteredSales = [...this.sales];
    });
  }

  onSearch(): void {
    this.filteredSales = this.sales.filter(sale =>
      sale.producto.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      sale.cliente.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      sale.fecha.includes(this.searchTerm)
    );
  }

  addSale(): void {
    // Aquí puedes agregar lógica para abrir un formulario o redirigir a una página de agregar venta
    console.log('Agregar venta');
    // Ejemplo: alert('Funcionalidad de agregar no implementada aún');
  }
}
