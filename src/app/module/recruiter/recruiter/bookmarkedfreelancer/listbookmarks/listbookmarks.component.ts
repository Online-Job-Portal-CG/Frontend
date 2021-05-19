import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedfreelancerService } from 'src/app/services/bookmarkedfreelancer.service';
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
  constructor(private router: Router, private route: ActivatedRoute, private bookmarkedFreelancerService: BookmarkedfreelancerService,private recruiterService: RecruiterService) { }
  ngOnInit(): void {
    this.recruiterService.getById(this.recruiterId).subscribe(
      data =>{
        this.recruiterName = data.userName;
        alert(data.userName);
      },
      err =>{
        alert(err.error);
      }
    );
    this.bookmarkedFreelancerService.getAllBookmarks()
      .subscribe(
        data => {
          this.bookmarksList = data;
          console.log(data);
        }, err => {
          alert(err.error);
        }
      )
  }
  
  
}
