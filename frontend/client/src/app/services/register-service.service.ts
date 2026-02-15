import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private baseUrl =
    "https://fees-management-springboot-angular.onrender.com/student_fee";

  constructor(private http: HttpClient) {}

  // ✅ Register
  newUser(reg: Register): Observable<Register> {
    return this.http.post<Register>(
      `${this.baseUrl}/register`,
      reg
    );
  }

  // ✅ Login
  login(reg: Register): Observable<Register> {
    return this.http.post<Register>(
      `${this.baseUrl}/login`,
      {
        emailid: reg.emailid,
        password: reg.password
      }
    );
  }

  // ✅ Get All Users
  getAll(): Observable<Register[]> {
    return this.http.get<Register[]>(
      `${this.baseUrl}/register`
    );
  }

  // ✅ Get by Email
  getByEmail(email: string): Observable<Register> {
    return this.http.get<Register>(
      `${this.baseUrl}/register/email/${email}`
    );
  }
}
