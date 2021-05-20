import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedfreelancerService } from 'src/app/services/bookmarkedfreelancer.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-listbookmarks',
  templateUrl: './listbookmarks.component.html',
  styleUrls: ['./listbookmarks.component.css']
})
export class ListbookmarksComponent implements OnInit {
  bookmarksList: any[];
  recruiterId: number = Number(localStorage.getItem('recruiterId'));
  recruiterName: string;
  constructor(private bookmarkedFreelancerService: BookmarkedfreelancerService, private recruiterService: RecruiterService, private feedbackService: FeedbackService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.recruiterService.getById(this.recruiterId).subscribe(
      data => {
        this.recruiterName = data.userName;
        localStorage.setItem('recruiterUName', this.recruiterName);
      },
      err => {
        alert(err.error);
      }
    );
    this.bookmarkedFreelancerService.getAllBookmarks()
      .subscribe(
        data => {
          console.log(data);
          this.bookmarksList=data;
        }, err => {
          alert(err.error);
        }
      )
  }

  manageFeedbacks(frId: string){
    console.log(frId);  
    this.router.navigate(['../../feedbacks', frId], {relativeTo: this.route.parent});
  }


}

export class Bookmarks {
  name: string[] = [];
  userName: string[] = [];
}