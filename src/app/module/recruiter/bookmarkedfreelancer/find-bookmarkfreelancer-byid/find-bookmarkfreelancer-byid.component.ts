import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedfreelancerService, BookmarkFreelancer } from 'src/app/services/bookmarkedfreelancer.service';

@Component({
  selector: 'app-find-bookmarkfreelancer-byid',
  templateUrl: './find-bookmarkfreelancer-byid.component.html',
  styleUrls: ['./find-bookmarkfreelancer-byid.component.css']
})
export class FindBookmarkfreelancerByidComponent implements OnInit {
  id: number;
  bookmarkedFreelancer: BookmarkFreelancer = new BookmarkFreelancer();

  constructor(private route: ActivatedRoute, private router: Router, private bookmarkedFreelancerService: BookmarkedfreelancerService) { }

  ngOnInit(): void {
    this.bookmarkedFreelancer = new BookmarkFreelancer();
    this.id = this.route.snapshot.params['id'];
    this.bookmarkedFreelancerService.getBookmarkedFreelancerById(this.id)
      .subscribe(data => {
        console.log(data);
        this.bookmarkedFreelancer = data;
      }, err => console.log(err));
  }
  
}
