import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ComponentsProductsComponent } from '../../components/components-products/components-products.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-view',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ComponentsProductsComponent,
    HeaderComponent,
    NavBarComponent,
    FormsModule
  ],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.css'
})
export class ProductsViewComponent implements OnInit {
  productinfo: Product[] = [];
  newProduct: Product = { id: '', name: '', image_url: '', category_id: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
  showForm: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.productinfo = data;
        console.log('Productos cargados:', this.productinfo);
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      }
    });
  }

  addProduct(): void {
    if (this.newProduct.name && this.newProduct.category_id) {
      this.productsService.addProduct(this.newProduct).subscribe({
        next: (response) => {
          this.loadProducts(); // Recarga la lista para reflejar el nuevo producto
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
          this.loadProducts(); // Recarga la lista para reflejar la eliminación
          console.log('Producto eliminado:', id);
        },
        error: (err) => {
          console.error('Error al eliminar producto:', err);
        }
      });
    }
  }
}
