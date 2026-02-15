import { Component } from '@angular/core';
import { AdminLogin } from '../models/admin-login';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  ad: AdminLogin = new AdminLogin();

  constructor(
    private adServ: AdminLoginService,
    private router: Router
  ) {}

  submitdata() {
    this.adServ.login(this.ad).subscribe(res => {

      if (res) {
        localStorage.setItem("adminEmail", res.emailid);
        alert("Admin Login Successful ✅");
        this.router.navigate(['/admin-dashboard']);
      } else {
        alert("Invalid Admin Credentials ❌");
      }

    }, error => {
      alert("Login Failed ❌");
      console.error(error);
    });
  }
}
