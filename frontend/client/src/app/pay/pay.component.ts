import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PaymentComponent {

  p: any = {
    emailid: '',
    address: '',
    paymentamount: '',
    password: '',
    paymentmethod: ''
  };

  paymentHistory: any[] = [];

  submitdata() {

    const newPayment = {
      ...this.p,
      date: new Date()
    };

    this.paymentHistory.push(newPayment);

    alert("Payment Successful ✅");

    this.generateReceipt(newPayment);

    // Reset form
    this.p = {
      emailid: '',
      address: '',
      paymentamount: '',
      password: '',
      paymentmethod: ''
    };
  }

  generateReceipt(payment: any) {

    const receiptContent = `
Fees Management System
-----------------------------
Email: ${payment.emailid}
Address: ${payment.address}
Amount: ₹${payment.paymentamount}
Method: ${payment.paymentmethod}
Date: ${payment.date}

Payment Successful!
`;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'Payment_Receipt.txt';
    link.click();
  }
}
