import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.css']
})
export class RecruitersComponent implements OnInit {
  recruitersList: any[];
  constructor(private recruiterService: RecruiterService, private router: Router) { }

  ngOnInit(): void {
    this.recruiterService.findAll()
      .subscribe(
        data => {
          console.log(data);
          this.recruitersList = data;
        },
        err => {
          alert(err.error);
        }
      );
  }
  goBack(){
    this.router.navigate(['../admin']);
  }
}
