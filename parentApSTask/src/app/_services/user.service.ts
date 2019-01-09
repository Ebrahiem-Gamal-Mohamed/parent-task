import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as Globals from '../globals';
import { User } from '../_models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  page_number: number;

  constructor(private http: HttpClient) {
      this.page_number = 1;
   }

  getAll() {
      return this.http.get<User[]>(`${Globals.apiUrl}/users`, { params: { page: JSON.stringify(this.page_number) } });
  }

  getById(id: number) {
      return this.http.get(`${Globals.apiUrl}/users/${id}`);
  }

  add(user: User) {
      return this.http.post(`${Globals.apiUrl}/users`, user);
  }

  update(user: User) {
      return this.http.put(`${Globals.apiUrl}/users/${user.id}`, user);
  }

  delete(id: number) {
      return this.http.delete(`${Globals.apiUrl}/users/${id}`);
  }

}
