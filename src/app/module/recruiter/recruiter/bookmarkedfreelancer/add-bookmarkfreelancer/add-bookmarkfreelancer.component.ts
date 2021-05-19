import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookmarkedfreelancerService, BookmarkFreelancer } from 'src/app/services/bookmarkedfreelancer.service';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-add-bookmarkfreelancer',
  templateUrl: './add-bookmarkfreelancer.component.html',
  styleUrls: ['./add-bookmarkfreelancer.component.css']
})
export class AddBookmarkfreelancerComponent implements OnInit {
  constructor(){}
  ngOnInit(): void{}  
}
