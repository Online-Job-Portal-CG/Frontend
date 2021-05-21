import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkedJob, BookmarkedjobService } from 'src/app/services/bookmarkedjob.service';

@Component({
  selector: 'app-find-job-by-id',
  templateUrl: './find-job-by-id.component.html',
  styleUrls: ['./find-job-by-id.component.css']
})
export class FindJobByIdComponent implements OnInit {
  bookmarkedJob: any[]
  id: number;
  jobExistsById: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private bookmarkedJobService: BookmarkedjobService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookmarkedJobService.getById(this.id)
      .subscribe(
        data=>{
          this.bookmarkedJob=data;
        },
        err=>{
          alert(err.error);
        }
      )
  }

}
