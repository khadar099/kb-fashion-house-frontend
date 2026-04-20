import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // 🔥 Backend base URL (Spring Boot)
  private baseUrl = 'http://98.130.53.119:8181/api';

  constructor(private http: HttpClient) {}

  // ✅ Register API
  register(data: {
    email: string;
    password: string;
    mobile: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  // ✅ Login API (email OR mobile + password)
  login(data: {
    emailOrMobile: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }
}
