import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  invalidCredentials: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'bharatagri' && this.password === '1234') {
      this.router.navigate(['/crop-list']);
    } else {
      this.invalidCredentials = true;
      this.password = '';
    }
  }
}
