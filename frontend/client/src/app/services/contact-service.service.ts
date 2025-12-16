import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService{
  login(reg: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl : string="http://localhost:8081/student_fee/contact"
  constructor(private http:HttpClient) { }
  newcontact(c:Contact): Observable<Contact>
  {
    return this.http.post<Contact>(`${this.baseUrl}`,c);
    }
    getAll():Observable<Contact[]>
    {
      return this.http.get<Contact[]>(`${this.baseUrl}`)
    }
}

