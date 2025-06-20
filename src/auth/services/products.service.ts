import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl= 'https://fakeapi-3oxx.onrender.com/api/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

