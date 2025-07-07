import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from '../models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl = 'https://fakeapi-3oxx.onrender.com/api/sales';

  constructor(private http: HttpClient) {}

  getAllSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.apiUrl);
  }

  addSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.apiUrl, sale);
  }

  updateSale(id: string, sale: Sale): Observable<Sale> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Sale>(url, sale);
  }

  deleteSale(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
