import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from 'express';
import { register } from 'module';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent implements OnInit{
  reg:Register=new Register();
  ngOnInit(): void {
    
  }
constructor(private regServ:RegisterServiceService)
{

}
submitdata()
{
  this.regServ.newUser(this.reg).subscribe((data:Register)=>{
    if(data!=null)
      {
        alert('Registration Successful')
      }
  })
}
}
