// src/app/shared/api/http-client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private baseUrl = 'https://fakeapi-3oxx.onrender.com/api';

  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`, { params });
  }

  getById<T>(url: string, id: string | number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}/${id}`);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, data);
  }

  put<T>(url: string, id: string | number, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${url}/${id}`, data);
  }

  delete<T>(url: string, id: string | number): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${url}/${id}`);
  }
}
