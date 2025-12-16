import { Component, OnInit } from '@angular/core';
import { PaymentServiceService } from '../services/payment-service.service';
import { Payment } from '../models/payment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-payment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-payment.component.html',
  styleUrl: './view-payment.component.css'
})
export class ViewPaymentComponent implements OnInit{
  pm:Payment[]=[]
  constructor(private pServ:PaymentServiceService)
  {

  }
  ngOnInit(): void {
   this.pServ.getAll().subscribe((data:Payment[])=>{
    if(data!=null)
      {
        this.pm=data
      }
   })
  }

}
