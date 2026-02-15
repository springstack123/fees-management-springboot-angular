import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

 private baseUrl = "https://fees-management-springboot-angular.onrender.com/student_fee";

  constructor(private http: HttpClient) {}

  newfeedback(f: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.baseUrl}/newfeedback`, f);
  }

  getAllFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.baseUrl}/allfeedback`);
  }
  
}
