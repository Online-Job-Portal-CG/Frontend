import { Component, OnInit } from '@angular/core';
import { BookmarkedJob, BookmarkedjobService } from 'src/app/services/bookmarkedjob.service';
import { Job, JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  activeJobsList: any[];
  job: Job;

  constructor(private bookmarkedJobService: BookmarkedjobService, private jobService: JobService) { }
  bookmarkedJob: BookmarkedJob = new BookmarkedJob(); 
  ngOnInit(): void {
    this.jobService.getAllActive()
      .subscribe(
        data =>{
          this.activeJobsList = data;
        },
        err =>{
          alert(err.error);
        }
      )
  }

  addBookmark(jobId: number, skillId: number) {
    console.log("Add Bookmark Method Invoked");
    this.bookmarkedJob.jobId=jobId;
    this.bookmarkedJob.skillId=skillId;
    this.bookmarkedJob.freelancerId=Number(localStorage.getItem('freelancerId'));
    console.log(this.bookmarkedJob);
    this.bookmarkedJobService.createBookmark(this.bookmarkedJob)
      .subscribe(
        data =>{
          alert('Bookmarked Successfully');
          console.log(data);
        },
        err =>{
          alert(err.error);
        }
      );
  }

}
