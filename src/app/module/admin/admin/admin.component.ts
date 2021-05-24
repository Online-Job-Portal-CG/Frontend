import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addSkill() {
    this.router.navigate(['skills/add'], { relativeTo: this.route });
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => { window.location.reload(); });

  }
}
