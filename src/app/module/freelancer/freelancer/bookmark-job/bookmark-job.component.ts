import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedjobService } from 'src/app/services/bookmarkedjob.service';

@Component({
  selector: 'app-bookmark-job',
  templateUrl: './bookmark-job.component.html',
  styleUrls: ['./bookmark-job.component.css']
})
export class BookmarkJobComponent implements OnInit {
  bookmarkedJobId: number;
  constructor(private router: Router, private route: ActivatedRoute, private bookmarkedJobService: BookmarkedjobService) { }

  ngOnInit(): void {
  }

  listJobs(){
    this.router.navigate(['listJobs']);
  }

  findById(id: number) {
    localStorage.setItem('bkdJobId',String(id));
    console.log("Fetch Details of Bookmark Number :"+Number(localStorage.getItem('bkdJobId')))
    this.bookmarkedJobService.getById(Number(localStorage.getItem('bkdJobId')))
    .subscribe(data =>{
      this.bookmarkedJobId = data.id;
      alert("Bookmark Present");
      this.router.navigate(['./find', id], {relativeTo: this.route});
    }, err=> {
      alert(err.error);
      this.router.navigate(['../job'], {relativeTo: this.route});
    });
  }
  goBack() {
    this.router.navigate(["../freelancer"]);
  }

}
