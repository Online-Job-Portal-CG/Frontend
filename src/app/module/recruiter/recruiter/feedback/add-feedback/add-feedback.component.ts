import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackDTO, FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  newFeedback: FeedbackDTO;
  freelancerId: string;
  recruiterId: string;
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.freelancerId = this.route.snapshot.params['frUName'];
    this.recruiterId = localStorage.getItem('recruiterUName');

    this.feedbackForm = this.formBuilder.group({
      ratings: '',
      comments: '',
      recruiterId: '',
      freelancerId: ''
    })
  }

  addFeedback() {
    this.newFeedback = new FeedbackDTO();
    this.newFeedback.ranges = this.feedbackForm.value.ratings;
    this.newFeedback.comments = this.feedbackForm.value.comments;
    this.newFeedback.recruiterId = String(this.recruiterId);
    this.newFeedback.freelancerId = String(this.freelancerId);
    console.log(this.newFeedback)
    this.feedbackService.addFeedback(this.newFeedback)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }

}
