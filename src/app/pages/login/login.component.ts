import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailOrMobile = '';
  password = '';

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

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
