import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';
import { SkillexperienceService } from 'src/app/services/skillexperience.service';

@Component({
  selector: 'app-skill-experience',
  templateUrl: './skill-experience.component.html',
  styleUrls: ['./skill-experience.component.css']
})
export class SkillExperienceComponent implements OnInit {
  skillsList:any[];
  skillForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder:FormBuilder,
    private skillService: SkillService,
    private skillExperienceService: SkillexperienceService
  ) { }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      skillExperience:['', [Validators.required]],
      skillId:['', [Validators.required]]
    })
    this.skillService.getAllSkills()
      .subscribe(
        data=>{
          this.skillsList = data;
        }
      )
  }

  addSkill() {
    
  }
  updateSkill() {
    this.router.navigate(['update'], { relativeTo: this.route })
  }

}
