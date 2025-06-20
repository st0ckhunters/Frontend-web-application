import {Component, Input, OnInit} from '@angular/core'; // Añadimos OnInit
import { TranslatePipe } from '@ngx-translate/core';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service'; // Importamos el servicio

@Component({
  selector: 'app-components-products',
  standalone: true,
  imports: [
    TranslatePipe,
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './components-products.component.html',
  styleUrl: './components-products.component.css'
})
export class ComponentsProductsComponent {
  @Input() productinfo!: Product[]; // Recibe productinfo como entrada
}
