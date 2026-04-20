import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailOrMobile: string = '';
  password: string = '';

  constructor(private api: ApiService) {}

  login() {
    const request = {
      emailOrMobile: this.emailOrMobile,
      password: this.password
    };

    this.api.login(request).subscribe({
      next: (res) => {
        alert('Login successful');
        console.log(res);
      },
      error: (err) => {
        alert('Login failed');
        console.log(err);
      }
    });
  }
}
