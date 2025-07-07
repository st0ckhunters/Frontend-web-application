import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'registered_users';

  // Registrar un nuevo usuario
  register(user: { name: string, lastName: string, email: string, password: string }): Observable<boolean> {
    const users = this.getUsers();
    if (users.find(u => u.email === user.email)) {
      return of(false); // Usuario ya existe
    }
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return of(true); // Registro exitoso
  }

  // Validar login
  login(email: string, password: string): Observable<boolean> {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('current_user', JSON.stringify(user)); // Guardar usuario actual
      return of(true); // Login exitoso
    }
    return of(false); // Credenciales inválidas
  }

  // Obtener usuarios registrados
  private getUsers(): any[] {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : [];
  }

  // Verificar si hay un usuario logueado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('current_user');
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('current_user');
  }
}
