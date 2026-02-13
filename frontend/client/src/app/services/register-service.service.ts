import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';

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
    return this.http.get<Register>(
      `${this.baseUrl}/${reg.emailid}/${reg.password}`
    );
  }

  getAll(): Observable<Register[]> {
    return this.http.get<Register[]>(this.baseUrl);
  }
}
