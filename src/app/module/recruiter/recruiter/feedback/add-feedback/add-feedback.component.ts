import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback, FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  newFeedback: Feedback;
  freelancerUName: string;
  recruiterId: string;
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.newFeedback = new Feedback();
    this.freelancerUName = this.route.snapshot.params['frId'];
    
    this.recruiterId = localStorage.getItem('recruiterUName');
    this.feedbackForm = this.formBuilder.group({
      ratings: '',
      comments: '',
      recruiterId: '',
      freelancerId: ''
    })
  }

  addFeedback() {
    this.newFeedback = new Feedback();
    this.newFeedback.ranges = this.feedbackForm.value.ratings;
    this.newFeedback.comments = this.feedbackForm.value.comments;
    this.newFeedback.recruiterUName = String(this.recruiterId);
    this.newFeedback.freelancerUName = String(this.freelancerUName);
    console.log(this.newFeedback)
    this.feedbackService.addFeedback(this.newFeedback)
      .subscribe(
        data => {
          alert(data);
        },
        err => {
          console.log(err);
        }
      );
  }

}
