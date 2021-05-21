import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { JobApplication, JobapplicationService } from 'src/app/services/jobapplication.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

  jobId: number;
  coverLetter: string;
  jobDetails: any[];
  constructor(private router: Router, private route: ActivatedRoute, private jobapplicationService: JobapplicationService, private jobService: JobService) { }
  jobApplication = new JobApplication();
  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];
    this.jobService.findJobById(this.jobId)
      .subscribe(
        data=>{
          console.log(data);
          this.jobDetails = data;
        },
        err=>{
          alert(err.error);
        }
      )
  }

  onSubmit(coverLetter: string) {
    this.jobApplication.coverLetter = coverLetter;
    this.jobApplication.jobId = this.jobId;
    this.jobApplication.freelancerId = Number(localStorage.getItem('freelancerId'));
    console.log(this.jobApplication);
    this.jobapplicationService.applyToJob(this.jobApplication)
      .subscribe(
        data=>{
          console.log(data);
          alert(data);
          this.router.navigate(['../job'],{relativeTo:this.route.parent});
        },
        err =>{
          alert(err.error);
        }
      );
  }

}
