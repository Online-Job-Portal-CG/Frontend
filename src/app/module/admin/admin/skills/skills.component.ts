import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList: any[];
  constructor(private router: Router, private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getAllSkills()
      .subscribe(
        data=>{
          console.log(data);
          this.skillsList = data;
        },
        err=>{
          alert(err.error);
        }
      );
  }
  goBack(){
    this.router.navigate(['../admin']);
  }
}
