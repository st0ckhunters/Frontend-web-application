// src/app/auth/services/user.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService} from '../../shared/api/api-services.service';
import { HttpClientService} from '../../shared/api/httpclient.service';
import { User} from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {
  constructor(http: HttpClientService) {
    super(http, 'users'); // Pasa la instancia inyectada de HttpClientService y el recurso 'users'
  }

  getAllUsers(params?: any): Observable<User[]> {
    return this.getAll<User>(params);
  }

  getUserById(id: string | number): Observable<User> {
    return this.getById<User>(id);
  }

  createUser(data: any): Observable<User> {
    return this.create<User>(data);
  }

  updateUser(id: string | number, data: any): Observable<User> {
    return this.update<User>(id, data);
  }

  removeUser(id: string | number): Observable<User> {
    return this.remove<User>(id);
  }
}
