import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookmarkedfreelancerService, BookmarkFreelancer } from 'src/app/services/bookmarkedfreelancer.service';
import { Freelancer, FreelancerService } from 'src/app/services/freelancer.service';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-listfreelancers',
  templateUrl: './listfreelancers.component.html',
  styleUrls: ['./listfreelancers.component.css']
})
export class ListfreelancersComponent implements OnInit {

 
  freelancersList: any[];
  freelancer: Freelancer;
  constructor(private bookmarkedFreelancerService: BookmarkedfreelancerService, private router: Router, private freelancerService: FreelancerService, private recruiterService: RecruiterService) { }
  bookmarkedFreelancer: BookmarkFreelancer = new BookmarkFreelancer;
  ngOnInit(): void {
    this.freelancerService.listAll().subscribe(
      data => {
        this.freelancersList = data;
        console.log(data);
      }
    )
  }
  addBookmark(frId: number): any {
    console.log("Add Bookmark Method Invoked");
    this.bookmarkedFreelancer.freelancerId = frId;
    this.bookmarkedFreelancer.recruiterId = Number(localStorage.getItem('recruiterId'));
    // console.log(this.recruiterService.getRecruiterId());
    console.log(localStorage.getItem('recruiterId'));
    console.log(frId);
    this.bookmarkedFreelancerService.addBookmarkFreelancer(this.bookmarkedFreelancer)
    .subscribe(
      data=>{
        console.log(data);
      },
      err =>{
        console.log(err);
      }
    );
  }

  // onSubmit(addBookmark: BookmarkFreelancer): any {
  //   console.log(addBookmark);
  //   alert("Bookmarked Freelancer Successfully");
  //   this.bookmarkedFreelancer.freelancerId = addBookmark.freelancerId;
  //   this.bookmarkedFreelancer.recruiterId = addBookmark.recruiterId;
    
  //   this.bookmarkedFreelancerService.addBookmarkFreelancer(this.bookmarkedFreelancer)
  //     .subscribe(data => {
  //       console.log(data);
  //       alert(data);
  //       //TODO: Route to Recruiter Module Homepage
  //     }, err => console.log(err));
  // }


}
