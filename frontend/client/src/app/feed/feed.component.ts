import { Component } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  f:Feedback=new Feedback();
  constructor(private fserv:FeedbackService)
  {

  }
  submitdata()
  {
    this.f.emailid=localStorage.getItem("emailid")
    this.fserv.newfeedback(this.f).subscribe((data:Feedback)=>{
      if(data!=null)
        {
          alert('thank you for feedback')
        }
    })
  }
 
}
