import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookmarkedfreelancerService, BookmarkFreelancer } from 'src/app/services/bookmarkedfreelancer.service';

@Component({
  selector: 'app-find-bookmarkfreelancer-byskill',
  templateUrl: './find-bookmarkfreelancer-byskill.component.html',
  styleUrls: ['./find-bookmarkfreelancer-byskill.component.css']
})
export class FindBookmarkfreelancerByskillComponent implements OnInit {
  id: number
  skillName: string
  bookmarkedFreelancers: Observable<BookmarkFreelancer[]>;
  constructor(private route: ActivatedRoute, private router: Router, private bookmarkedFreelancerService: BookmarkedfreelancerService) { }

  ngOnInit(): void {
    //TODO
    this.bookmarkedFreelancers = new Observable<BookmarkFreelancer[]>();
    this.skillName = this.route.snapshot.params['skillName'];
    this.bookmarkedFreelancerService.getBookmarkedFreelancersBySkill(this.skillName)
      .subscribe(data => {
        console.log(data);
        this.bookmarkedFreelancers = data;
      }, err => console.log(err));
  }

  reloadData() {
    this.skillName = this.route.snapshot.params['skillName'];
    this.bookmarkedFreelancers = this.bookmarkedFreelancerService.getBookmarkedFreelancersBySkill(this.skillName);
  }

  deleteFreelancer(id: number) {
    this.bookmarkedFreelancerService.deleteBookmarkFreelancer(id)
      .subscribe(data => {
        console.log(data);
        this.reloadData();
      }, err => console.log(err));
  }

  freelancerDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}

