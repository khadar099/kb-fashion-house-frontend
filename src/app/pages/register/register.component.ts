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

  email = '';
  mobile = '';
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

    const payload = {
      email: this.email,
      mobile: this.mobile,
      password: this.password
    };

    this.api.register(payload).subscribe({
      next: () => {
        alert('User registered successfully');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert('Registration failed');
      }
    });
  }
}
