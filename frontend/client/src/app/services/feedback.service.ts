import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl =
    "https://fees-management-springboot-angular.onrender.com/student_fee/feedback";

  constructor(private http: HttpClient) {}

  newfeedback(f: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.baseUrl, f);
  }

  getAll(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.baseUrl);
  }
}
