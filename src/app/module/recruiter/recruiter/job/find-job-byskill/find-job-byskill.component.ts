import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-find-job-byskill',
  templateUrl: './find-job-byskill.component.html',
  styleUrls: ['./find-job-byskill.component.css']
})
export class FindJobByskillComponent implements OnInit {
  jobsList: any[];
  skillName: string;
  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    this.skillName = this.route.snapshot.params['skill'];
    this.jobService.findJobsBySkill(this.skillName)
    .subscribe(
      data=>{
        console.log(data);
        this.jobsList=data;
      },
      err=>{
        alert(err.error);
      }
    )
  }

}
