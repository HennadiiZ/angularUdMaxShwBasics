import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onLoadSevers(): void {
    this.router.navigate(['/servers']);
  }

  onLoadSever(id: number): void {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: {allowEdit: '1'}, fragment: 'loading' });
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
