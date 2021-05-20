import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService, Job } from 'src/app/services/job.service';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  jobForm: FormGroup;
  skills: any[];
  postJob: Job;
  constructor(private route: ActivatedRoute,private jobService: JobService, private router: Router, private fromBuilder: FormBuilder, private skillService: SkillService) { }
  ngOnInit(): void {
    this.postJob = new Job();
    this.skillService.getAllSkills()
      .subscribe(
        data => {
          this.skills = data;
        },
        err => {
          alert(err.error);
        }
      )
    this.jobForm = this.fromBuilder.group({
      jobTitle: '',
      jobDescription: '',
      skillId: ''
    })
  }

  onSubmit() {

    this.postJob.jobTitle = this.jobForm.value.jobTitle;
    this.postJob.jobDescription = this.jobForm.value.jobDescription;
    this.postJob.skillId = this.jobForm.value.skillId;
    this.postJob.freelancerId = 0;
    this.postJob.recruiterId = Number(localStorage.getItem('recruiterId'));
    this.jobService.addJob(this.postJob).subscribe(
      data=>{
        console.log(data);
        // alert(data);
        this.router.navigate(['../../jobs'], {relativeTo: this.route});
      },
      err=>{
        // alert(err.error);
        console.warn(err.error);  
      }
    )
  }


}
