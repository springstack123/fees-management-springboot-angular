import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  menuType: 'guest' | 'user' | 'admin' = 'guest';
  mobileOpen: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.determineMenuType();
    
    // Listen for route changes to close mobile menu
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.closeMobile();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  determineMenuType(): void {
    // Replace this logic with your actual authentication check
    const userRole = localStorage.getItem('userRole') || 'guest';
    
    if (userRole === 'admin') {
      this.menuType = 'admin';
    } else if (userRole === 'user') {
      this.menuType = 'user';
    } else {
      this.menuType = 'guest';
    }
  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile(): void {
    this.mobileOpen = false;
  }

  slogout(): void {
    // Your user logout logic
    localStorage.removeItem('userRole');
    localStorage.removeItem('authToken');
    this.menuType = 'guest';
    this.closeMobile();
    this.router.navigate(['/']);
  }

  alogout(): void {
    // Your admin logout logic
    localStorage.removeItem('adminRole');
    localStorage.removeItem('authToken');
    this.menuType = 'guest';
    this.closeMobile();
    this.router.navigate(['/']);
  }
}