import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  findBySkill(skill: String) {
    this.router.navigate(['./findSkill', skill], { relativeTo: this.route });
  }
  goBack() {
    this.router.navigate(["../recruiter"]);
  }
}
