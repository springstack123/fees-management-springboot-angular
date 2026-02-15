import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterServiceService } from '../services/register-service.service';
import { Register } from '../models/register';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  reg:Register=new Register();
  constructor(private regServ:RegisterServiceService,private router:Router)
  {

  }
submitdata() {
  this.regServ.login(this.reg).subscribe({
    next: (res) => {

      if (res) {
        localStorage.setItem("studentEmail", res.emailid);
        alert("Login Successful ✅");
        this.router.navigate(['/profile']);
      } else {
        alert("Invalid Credentials ❌");
      }

    },
    error: (err) => {
      console.log("Login error:", err);
      alert("Server Error ❌");
    }
  });
}

}
