import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedjobService } from 'src/app/services/bookmarkedjob.service';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-list-bookmarked-jobs',
  templateUrl: './list-bookmarked-jobs.component.html',
  styleUrls: ['./list-bookmarked-jobs.component.css']
})
export class ListBookmarkedJobsComponent implements OnInit {
  bookmarksList: any[];
  freelancerId: number = Number(localStorage.getItem('freelancerId'));
  freelancerName: string;
  constructor(private bookmarkedJobService: BookmarkedjobService, private freelancerService: FreelancerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.freelancerService.getById(this.freelancerId)
      .subscribe(
        data=>{
          this.freelancerName=data.userName;
          localStorage.setItem('freelancerUName', this.freelancerName);
        },
        err=>{
          alert(err.error);
        }
      );
      console.log(this.freelancerId);
      this.bookmarkedJobService.getAll(this.freelancerId)
        .subscribe(
          data =>{
            this.bookmarksList=data;
            console.log(data);
          },
          err =>{
            alert(err.error);
          }
        )
  }

  applyToJob(jobId: number){
    this.router.navigate(['apply', jobId], {relativeTo: this.route.parent});
  }

}
