import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactServiceService } from '../services/contact-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-view-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-contact.component.html',
  styleUrl: './view-contact.component.css'
})
export class ViewContactComponent implements OnInit{
  cd:Contact[]=[]
  constructor(private cServ:ContactServiceService)
  {

  }
  ngOnInit(): void {
   this.cServ.getAll().subscribe((data:Contact[])=>{
    if(data!=null)
      {
        this.cd=data
      }
   })
  }

}


