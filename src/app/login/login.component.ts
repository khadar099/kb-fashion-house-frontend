import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private api: ApiService) {}

  login() {
    this.api.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        alert('Login successful');
        console.log(res);
      },
      error: (err) => {
        alert('Invalid credentials');
        console.log(err);
      }
    });
  }
}
