// src/app/shared/api/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClientService} from './httpclient.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(protected http: HttpClientService, protected resource: string) {}

  getAll<T>(params?: any): Observable<T[]> {
    return this.http.get<T[]>(this.resource, params);
  }

  getById<T>(id: string | number): Observable<T> {
    return this.http.getById<T>(this.resource, id);
  }

  create<T>(data: any): Observable<T> {
    return this.http.post<T>(this.resource, data);
  }

  update<T>(id: string | number, data: any): Observable<T> {
    return this.http.put<T>(this.resource, id, data);
  }

  remove<T>(id: string | number): Observable<T> {
    return this.http.delete<T>(this.resource, id);
  }
}
