import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("Inside recruiter")
  }

  findBmarkById(id: number){
    console.log(id);
    this.router.navigate(['find/id',id]);
  }
  onClick() {
    console.log("button Clicked");
  }
}
