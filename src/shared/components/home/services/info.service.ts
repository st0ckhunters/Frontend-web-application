import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiUrl = 'https://fakeapi-3oxx.onrender.com/api/users';

  constructor(private http: HttpClient) {}

  getAllInfo(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
