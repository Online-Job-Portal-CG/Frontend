import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { JobapplicationService } from 'src/app/services/jobapplication.service';

@Component({
  selector: 'app-list-applicants',
  templateUrl: './list-applicants.component.html',
  styleUrls: ['./list-applicants.component.css']
})
export class ListApplicantsComponent implements OnInit {
  jobId: number;
  freelancerId: number;
  applicantsList: any[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobApplicationService: JobapplicationService,
    private jobService: JobService) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['jobId'];
    console.log(this.jobId)

    this.jobApplicationService.getAllApplicants(this.jobId)
      .subscribe(
        data => {
          console.log(data);
          this.applicantsList = data;
        },
        err => {
          alert(err.error);
        }
      );
  }

  awardJob(jobId: number, freelancerId: number) {
    this.jobService.awardJob(jobId, freelancerId)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err.error);
        }
      )
      alert("Job Awarded successfully");
      this.router.navigate(['./list'],{relativeTo:this.route.parent});

  }

  // viewApplication(freelancerId: number, jobId: number) {
  //   this.jobApplicationService.findByFreelancerId(jobId, freelancerId)
  //     .subscribe(
  //       data=>{
  //         console.log(data);
  //       },
  //       err=>{
  //         alert(err.error);
  //       }
  //     )
  // }

}
