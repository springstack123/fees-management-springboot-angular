import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  private baseUrl =
    "https://fees-management-springboot-angular.onrender.com/student_fee/payment";

  constructor(private http: HttpClient) {}

  newpayment(p: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.baseUrl, p);
  }

  getAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl);
  }
}
