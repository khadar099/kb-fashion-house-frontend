import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'kb-fashion-house-frontend';

  message: string = '';

  constructor(private http: HttpClient) {}

  getHomeMessage() {
    this.http.get('http://98.130.53.119:8181/api/home', { responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.message = res;
        },
        error: (err) => {
          console.log(err);
          this.message = 'Backend connection failed ❌';
        }
      });
  }
}
