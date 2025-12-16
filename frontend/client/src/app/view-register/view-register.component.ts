import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterServiceService } from '../services/register-service.service';

@Component({
  selector: 'app-view-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-register.component.html',
  styleUrl: './view-register.component.css'
})
export class ViewRegisterComponent implements OnInit{
  regs:Register[]=[]
  constructor(private regServ:RegisterServiceService)
  {

  }
  ngOnInit(): void {
   this.regServ.getAll().subscribe((data:Register[])=>{
    if(data!=null)
      {
        this.regs=data
      }
   })
  }

}
