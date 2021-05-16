import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookmarkedfreelancerService, BookmarkFreelancer } from 'src/app/services/bookmarkedfreelancer.service';

@Component({
  selector: 'app-add-bookmarkfreelancer',
  templateUrl: './add-bookmarkfreelancer.component.html',
  styleUrls: ['./add-bookmarkfreelancer.component.css']
})
export class AddBookmarkfreelancerComponent implements OnInit {

  constructor(private bookmarkedFreelancerService: BookmarkedfreelancerService, private router: Router) { }
  bookmarkedFreelancer: BookmarkFreelancer = new BookmarkFreelancer;
  ngOnInit(): void {
  }
  onSubmit(addBookmark: BookmarkFreelancer): any {
    console.log(addBookmark);
    alert("Bookmarked Freelancer Successfully");
    this.bookmarkedFreelancer.freelancerId = addBookmark.freelancerId;
    this.bookmarkedFreelancer.recruiterId = addBookmark.recruiterId;
    this.bookmarkedFreelancer.skillId = addBookmark.skillId;
    this.bookmarkedFreelancerService.addBookmarkFreelancer(this.bookmarkedFreelancer)
      .subscribe(data => {
        console.log(data);
        alert(data);
        //TODO: Route to Recruiter Module Homepage
      }, err => console.log(err));
  }

}
