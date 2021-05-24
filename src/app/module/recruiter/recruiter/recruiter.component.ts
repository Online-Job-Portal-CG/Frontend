import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Inside recruiter")
  }

  findBmarkById(id: number) {
    console.log(id);
    this.router.navigate(['find/id', id]);
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => { window.location.reload(); });
  }
}
