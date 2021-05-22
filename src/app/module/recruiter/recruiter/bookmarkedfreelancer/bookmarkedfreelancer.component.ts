import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedfreelancerService } from 'src/app/services/bookmarkedfreelancer.service';

@Component({
  selector: 'app-bookmarkedfreelancer',
  templateUrl: './bookmarkedfreelancer.component.html',
  styleUrls: ['./bookmarkedfreelancer.component.css']
})
export class BookmarkedfreelancerComponent implements OnInit {
  bookmarkedFreelancerId: number;
  constructor(private route: ActivatedRoute, private router: Router, private bookmarkedFreelancerService: BookmarkedfreelancerService) { }

  ngOnInit(): void {
  }

  listFreelancers() {
    this.router.navigate['listFreelancers'];
  }

  findById(id: number) {
    localStorage.setItem('bkdFrId',String(id));
    console.log("Fetch Details of Bookmark Number :"+Number(localStorage.getItem('bkdFrId')))
    this.bookmarkedFreelancerService.getBookmarkedFreelancerById(Number(localStorage.getItem('bkdFrId')))
    .subscribe(data =>{
      this.bookmarkedFreelancerId = data.id;
      alert("Bookmark Present");
      this.router.navigate(['./find', id], {relativeTo: this.route});
    }, err=> {
      alert(err.error);
      this.router.navigate(['../recruiter'], {relativeTo: this.route});
    });
  }
  goBack() {
    this.router.navigate(["../recruiter"]);
  }
}
