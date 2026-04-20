import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
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
      next: (res) => {
        alert('Registered successfully');
        console.log(res);
      },
      error: (err) => {
        alert('Registration failed');
        console.log(err);
      }
    });
  }
}
