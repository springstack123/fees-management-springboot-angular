import { Injectable } from '@angular/core';
import { AdminLogin } from '../models/admin-login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  private baseUrl =
    "https://fees-management-springboot-angular.onrender.com/student_fee/admin/login";

  constructor(private http: HttpClient) {}

  // ✅ Correct POST Login
  login(ad: AdminLogin): Observable<AdminLogin> {
    return this.http.post<AdminLogin>(this.baseUrl, {
      emailid: ad.emailid,
      password: ad.password
    });
  }

}
