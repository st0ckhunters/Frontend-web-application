import { Component, Input, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-components-products',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf,
    NgIf,
    DatePipe,
    FormsModule
  ],
  templateUrl: './components-products.component.html',
  styleUrl: './components-products.component.css'
})
export class ComponentsProductsComponent implements OnInit {
  @Input() productinfo!: Product[];
  newProduct: Product = { id: '', name: '', image_url: '', category_id: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
  showForm: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // No necesitamos recargar aquí, ya lo hace el padre
  }

  addProduct(): void {
    if (this.newProduct.name && this.newProduct.category_id) {
      this.productsService.addProduct(this.newProduct).subscribe({
        next: (response) => {
          this.productinfo = [...this.productinfo, response]; // Actualiza la lista local
          this.newProduct = { id: '', name: '', image_url: '', category_id: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
          this.showForm = false;
          console.log('Producto añadido:', response);
        },
        error: (err) => {
          console.error('Error al añadir producto:', err);
        }
      });
    }
  }

  deleteProduct(id: string): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productsService.deleteProduct(id).subscribe({
        next: () => {
          this.productinfo = this.productinfo.filter(product => product.id !== id); // Actualiza la lista local
          console.log('Producto eliminado:', id);
        },
        error: (err) => {
          console.error('Error al eliminar producto:', err);
        }
      });
    }
  }
}
