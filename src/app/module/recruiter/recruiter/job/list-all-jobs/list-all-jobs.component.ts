import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job, JobService } from 'src/app/services/job.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-list-all-jobs',
  templateUrl: './list-all-jobs.component.html',
  styleUrls: ['./list-all-jobs.component.css']
})
export class ListAllJobsComponent implements OnInit {
  jobsList: any[];
  skillName: string[];
  recruiterName: string = localStorage.getItem('recruiterUName');
  jobStatus: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getAllJobs()
      .subscribe(
        data => {
          this.jobsList = data;
          this.jobStatus = data.jobStatus;
          console.log(data);
        },
        err => {
          alert(err.error);
        }
      )
  }
  closeJob(jobId: number) {
    this.jobService.closeJob(jobId)
      .subscribe(
        data => {
          alert(data);
        },
        err => {
          alert(err.error);
        }
      );
      this.router.navigate(['../list'], {relativeTo: this.route}).then(()=> window.location.reload());

  }

  receivedAppls(jobId: number) {
    this.router.navigate(['../viewApps', jobId], { relativeTo: this.route }).then(() => { window.location.reload(); });
  }

}
