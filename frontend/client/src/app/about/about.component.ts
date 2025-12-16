import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactServiceService } from '../services/contact-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  c:Contact=new Contact();
  ngOnInit(): void {
    
  }
constructor(private cServ:ContactServiceService)
{
   
}
submitdata()
{
  this.cServ.newcontact(this.c).subscribe((data:Contact)=>{
    if(data!=null)
      {
        alert("payment successful")
      }
  })
}
}
