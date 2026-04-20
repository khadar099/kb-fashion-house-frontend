import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://98.130.53.119:8181/api';

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }
}
