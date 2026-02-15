import { Component } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  f: Feedback = new Feedback();
  feedbackList: Feedback[] = [];

  constructor(private fserv: FeedbackService) {
    this.loadFeedback();
  }

 submitdata() {

  const email = localStorage.getItem("emailid");

  if (email) {
    this.f.emailid = email;
  }

  this.fserv.newfeedback(this.f).subscribe({
    next: (data: Feedback) => {
      alert("Feedback Submitted Successfully 💙");
      this.f = new Feedback();   // reset form
    },
    error: (err) => {
      console.error(err);
      alert("Error while submitting feedback ❌");
    }
  });

}


  loadFeedback() {
    this.fserv.getAllFeedback().subscribe(data => {
      this.feedbackList = data;
    });
  }
}
