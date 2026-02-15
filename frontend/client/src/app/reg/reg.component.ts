import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';   // ✅ CORRECT IMPORT
import { Register } from '../models/register';
import { RegisterServiceService } from '../services/register-service.service';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent implements OnInit {

  reg: Register = new Register();

  constructor(
    private regServ: RegisterServiceService,
    private router: Router   // ✅ Inject Router properly
  ) {}

  ngOnInit(): void {}

isLoading = false;

submitdata() {
  this.isLoading = true;

  this.regServ.newUser(this.reg).subscribe({
    next: (data) => {
      this.isLoading = false;
      alert("Registration Successful 🎉");
      this.router.navigate(['/thankyou']);
    },
    error: () => {
      this.isLoading = false;
      alert("Registration Failed ❌");
    }
  });

}

}
