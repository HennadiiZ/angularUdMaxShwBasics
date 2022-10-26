import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  goToHomePage(): void {
    console.log('Home page');
    this.router.navigate(['']);
  }

  goToUsersPage(): void {
    console.log('Users page');
    this.router.navigate(['users']);
  }

  goToServersPage(): void {
    console.log('Servers page');
    this.router.navigate(['servers']);
  }
}
