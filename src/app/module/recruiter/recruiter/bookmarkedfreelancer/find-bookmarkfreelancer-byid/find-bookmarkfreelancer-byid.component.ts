import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedfreelancerService } from 'src/app/services/bookmarkedfreelancer.service';

@Component({
  selector: 'app-find-bookmarkfreelancer-byid',
  templateUrl: './find-bookmarkfreelancer-byid.component.html',
  styleUrls: ['./find-bookmarkfreelancer-byid.component.css']
})
export class FindBookmarkfreelancerByidComponent implements OnInit {
  bookmarkedFreelancer: BookmarkedFreelancer;
  id: number;
  frExistsById: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private bookmarkedFreelancerService: BookmarkedfreelancerService) { }

  ngOnInit(): void {
    this.bookmarkedFreelancer = new BookmarkedFreelancer();
    this.id = this.route.snapshot.params['id'];
    this.bookmarkedFreelancerService.getBookmarkedFreelancerById(this.id)
      .subscribe(
        data => {
          this.frExistsById = true;
          console.log(data);
          this.bookmarkedFreelancer.id = data.freelancer.id;
          this.bookmarkedFreelancer.name = data.freelancer.firstName + " " + data.freelancer.lastName;
          this.bookmarkedFreelancer.userName = data.freelancer.userName;
          let i = 0;
          for (let skill in data.freelancer.skills) {
            console.log(data.freelancer.skills[i].skill.name);
            console.log(data.freelancer.skills[i].years);
            this.bookmarkedFreelancer.skillName.push(data.freelancer.skills[i].skill.name);
            this.bookmarkedFreelancer.skillExp.push(data.freelancer.skills[i].years);
            i++;
          }
        },
        err => {
          this.frExistsById = false;
          alert(err.error);
        }
      )
  }

}

export class BookmarkedFreelancer {
  id: number;
  userName: string;
  name: string;
  skillName: string[] = [];
  skillExp: number[] = [];
}
