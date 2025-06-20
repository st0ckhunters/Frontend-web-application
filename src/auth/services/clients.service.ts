import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Clients} from '../models/clients';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiUrl= 'https://fakeapi-3oxx.onrender.com/api/clients';

  constructor(private http: HttpClient) {}

  getAllclients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createclient(client: Clients) {
    return this.http.post<Clients>(this.apiUrl, client);
  }


}
