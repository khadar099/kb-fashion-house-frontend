import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailOrMobile = '';
  password = '';
  confirmPassword = '';

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  register() {

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.api.register({
      emailOrMobile: this.emailOrMobile,
      password: this.password
    }).subscribe({
      next: () => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert('Registration failed');
      }
    });
  }
}
