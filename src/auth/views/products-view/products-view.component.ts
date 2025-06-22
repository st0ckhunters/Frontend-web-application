import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ComponentsProductsComponent } from '../../components/components-products/components-products.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {NavBarComponent} from '../../../shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-products-view',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ComponentsProductsComponent,
    HeaderComponent,
    NavBarComponent
  ],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.css'
})
export class ProductsViewComponent implements OnInit {
  productinfo: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
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
}
