import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css']
})
export class FreelancersComponent implements OnInit {
  freelancersList: any[];
  constructor(private router:Router, private freelancerService: FreelancerService) { }

  ngOnInit(): void {
    this.freelancerService.listAll()
      .subscribe(
        data=>{
          this.freelancersList = data;
          console.log(data);
        },
        err=>{
          alert(err.error);
        }
      );
  }
  goBack(){
    this.router.navigate(['../admin']);
  }
}
