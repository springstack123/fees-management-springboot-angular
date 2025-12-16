import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-feedback',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-feedback.component.html',
  styleUrl: './view-feedback.component.css'
})
export class ViewFeedbackComponent implements OnInit{
  fd:Feedback[]=[]
  constructor(private fdServ:FeedbackService)
  {

  }
  ngOnInit(): void {
   this.fdServ.getAll().subscribe((data:Feedback[])=>{
    if(data!=null)
      {
        this.fd=data
      }
   })
  }

}
