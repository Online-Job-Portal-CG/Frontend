import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks: any[];
  freelancerId: string;
  recruiterId: string;
  avgFeedback: number;
  constructor(private route:ActivatedRoute, private router: Router, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.freelancerId = this.route.snapshot.params['frId'];
    this.recruiterId = String(localStorage.getItem('recruiterUName'));
    this.feedbackService.getFeedbackForFreelancer(this.freelancerId, this.recruiterId)
      .subscribe(
        data=>{
          console.log(data);
          this.feedbacks = data;
        },
        err=>{
          alert(err.error);
        }
      );
      this.feedbackService.getAverageRatings(this.freelancerId)
        .subscribe(
          data =>{
            console.log(data);
            this.avgFeedback = data;
          },
          err =>{
            alert(err.error);
          }
        )
  }
  addFeedback(frUName: string){
    this.router.navigate(['../add',frUName], {relativeTo:this.route})
  }
  goBack() {
    this.router.navigate(["../recruiter/bmark/freelancer/list"]);
  }
}
