import { Injectable } from '@angular/core';
import { AdminLogin } from '../models/admin-login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  private baseUrl : string="http://localhost:8081/student_fee/admin"
  constructor(private http:HttpClient) { }
  
    login(ad:AdminLogin):Observable<AdminLogin>
    {
      return this.http.get<AdminLogin>(`${this.baseUrl}`+"/"+ad.emailid+"/"+ad.password);
    }
}
