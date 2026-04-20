import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = '';
  mobile: string = '';
  password: string = '';

  constructor(private api: ApiService) {}

  register() {
    const request = {
      email: this.email,
      mobile: this.mobile,
      password: this.password
    };

    this.api.register(request).subscribe({
      next: () => alert('Registered successfully'),
      error: () => alert('Registration failed')
    });
  }
}
