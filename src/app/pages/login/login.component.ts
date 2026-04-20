import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

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
    const request = {
      email: this.email,
      password: this.password
    };

    this.api.login(request).subscribe({
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
