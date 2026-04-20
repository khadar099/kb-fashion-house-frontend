import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailOrMobile = '';
  password = '';
  confirmPassword = '';

  constructor(private api: ApiService, private router: Router) {}

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
        alert('Registered successfully');
        this.router.navigate(['/login']);
      },
      error: () => alert('Registration failed')
    });
  }
}
