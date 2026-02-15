import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private baseUrl =
    "https://fees-management-springboot-angular.onrender.com/student_fee/register";

  constructor(private http: HttpClient) {}

  newUser(reg: Register): Observable<Register> {
    return this.http.post<Register>(this.baseUrl, reg);
  }

  login(reg: Register): Observable<Register> {
    return this.http.post<Register>(
      "https://fees-management-springboot-angular.onrender.com/student_fee/login",
      {
        emailid: reg.emailid,
        password: reg.password
      }
    );
  }

  getAll(): Observable<Register[]> {
    return this.http.get<Register[]>(this.baseUrl);
  }

  getByEmail(email: string): Observable<Register> {
    return this.http.get<Register>(
      `${this.baseUrl}/email/${email}`
    );
  }
}
