import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ ADD THIS
import { RegisterServiceService } from '../services/register-service.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],   // ✅ ADD THIS
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  student: any;

  constructor(private regServ: RegisterServiceService) {}

  ngOnInit(): void {
    const email = localStorage.getItem("emailid");

    if (email) {
      this.regServ.getByEmail(email).subscribe(data => {
        this.student = data;
      });
    }
  }
}
