import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']   // ✅ Fixed
})
export class ViewFeedbackComponent implements OnInit {

  fd: Feedback[] = [];

  constructor(private fdServ: FeedbackService) {}

  ngOnInit(): void {
    this.fdServ.getAllFeedback().subscribe((data: Feedback[]) => {
      if (data != null) {
        this.fd = data;
      }
    });
  }
}
