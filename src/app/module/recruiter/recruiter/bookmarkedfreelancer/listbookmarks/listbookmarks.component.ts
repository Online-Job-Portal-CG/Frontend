import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedfreelancerService } from 'src/app/services/bookmarkedfreelancer.service';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-listbookmarks',
  templateUrl: './listbookmarks.component.html',
  styleUrls: ['./listbookmarks.component.css']
})
export class ListbookmarksComponent implements OnInit {
  bookmarksList: Bookmarks;
  recruiterId: number = Number(localStorage.getItem('recruiterId'));
  recruiterName: string;
  constructor(private bookmarkedFreelancerService: BookmarkedfreelancerService, private recruiterService: RecruiterService, private freelancerService: FreelancerService) { }
  ngOnInit(): void {
    this.bookmarksList = new Bookmarks();
    this.recruiterService.getById(this.recruiterId).subscribe(
      data => {
        this.recruiterName = data.userName;
        alert(data.userName);
      },
      err => {
        alert(err.error);
      }
    );
    this.bookmarkedFreelancerService.getAllBookmarks()
      .subscribe(
        data => {
          console.log(data);
          for (let elem in data) {
            if (data[elem].recruiterId === this.recruiterId) {
              this.freelancerService.getById(data[elem].freelancerId)
                .subscribe(
                  freelancerData => {
                    this.bookmarksList.userName.push(freelancerData.userName);
                    this.bookmarksList.name.push(freelancerData.firstName + " " + freelancerData.lastName);
                  },
                  err => {
                    alert(err.error);
                  }
                );

            }


          }
        }, err => {
          alert(err.error);
        }
      )
  }


}

export class Bookmarks {
  name: string[] = [];
  userName: string[] = [];
}