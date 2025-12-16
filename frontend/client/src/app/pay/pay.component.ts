import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Payment } from '../models/payment';
import { PaymentServiceService } from '../services/payment-service.service';
import { Router } from 'express';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent implements OnInit{
  p:Payment=new Payment();
  ngOnInit(): void {
    
  }
constructor(private pServ:PaymentServiceService)
{
   
}
submitdata()
{
  this.pServ.newpayment(this.p).subscribe((data:Payment)=>{
    if(data!=null)
      {
        alert("payment successful")
      }
  })
}
}
