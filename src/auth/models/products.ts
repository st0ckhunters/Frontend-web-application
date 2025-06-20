import {User} from './users';
//import {Product} from './products';

export interface Product {
  id: string;
  name: string;
  image_url: string;
  category_id: string;
  created_at: string;
  updated_at: string;
}

export interface ProductList {
  products: Product[];
}
