import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username: string;
  public userId;
  public user = true;

  constructor(
    private sidebarService: NbSidebarService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = this.authService.getUsername();
    this.userId = this.authService.getUserId();
    this.user = this.authService.getRoles().includes('Admin');
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");

    return false;
  }

  changePassword() {
    this.router.navigate(['/change-password', this.userId]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}