import { Component, Input, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-components-products',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DatePipe,
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './components-products.component.html',
  styleUrl: './components-products.component.css'
})
export class ComponentsProductsComponent implements OnInit {
  @Input() productinfo: Product[] = [];
  newProduct: Product = { id: '', name: '', image_url: '', category_id: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
  editProduct: Product | null = null;
  showForm: boolean = false;
  errorMessage: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // La carga de productos se maneja en el padre (ProductsViewComponent)
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.editProduct = null; // Resetea el formulario de edición
    this.newProduct = { id: '', name: '', image_url: '', category_id: '', created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
    this.errorMessage = '';
  }

  addProduct(): void {
    if (!this.newProduct.name || !this.newProduct.category_id) {
      this.errorMessage = 'El nombre y la categoría son obligatorios';
      return;
    }

    this.productsService.addProduct(this.newProduct).subscribe({
      next: (response) => {
        this.productinfo = [...this.productinfo, response];
        this.toggleForm();
        console.log('Producto añadido:', response);
      },
      error: (err) => {
        this.errorMessage = 'Error al añadir producto: ' + err.message;
        console.error('Error al añadir producto:', err);
      }
    });
  }

  editProductForm(product: Product): void {
    this.editProduct = { ...product };
    this.showForm = true;
    this.newProduct = { ...product }; // Carga los datos en el formulario
    this.errorMessage = '';
  }

  updateProduct(): void {
    if (!this.editProduct || !this.newProduct.name || !this.newProduct.category_id) {
      this.errorMessage = 'El nombre y la categoría son obligatorios';
      return;
    }

    this.productsService.updateProduct(this.editProduct.id, this.newProduct).subscribe({
      next: (response) => {
        this.productinfo = this.productinfo.map(p => p.id === response.id ? response : p);
        this.toggleForm();
        console.log('Producto actualizado:', response);
      },
      error: (err) => {
        this.errorMessage = 'Error al actualizar producto: ' + err.message;
        console.error('Error al actualizar producto:', err);
      }
    });
  }

  deleteProduct(id: string): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productsService.deleteProduct(id).subscribe({
        next: () => {
          this.productinfo = this.productinfo.filter(product => product.id !== id);
          console.log('Producto eliminado:', id);
        },
        error: (err) => {
          this.errorMessage = 'Error al eliminar producto: ' + err.message;
          console.error('Error al eliminar producto:', err);
        }
      });
    }
  }
}
