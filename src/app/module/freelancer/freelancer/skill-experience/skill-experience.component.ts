import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';
import { SkillExperience, SkillexperienceService } from 'src/app/services/skillexperience.service';

@Component({
  selector: 'app-skill-experience',
  templateUrl: './skill-experience.component.html',
  styleUrls: ['./skill-experience.component.css']
})
export class SkillExperienceComponent implements OnInit {
  skillsList: any[];
  skillForm: FormGroup;
  skillUpdateForm: FormGroup;
  skillExperience: SkillExperience;
  skillsOfFreelancer: any[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private skillService: SkillService,
    private skillExperienceService: SkillexperienceService
  ) { }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      skillExperience: ['', [Validators.required]],
      skillId: ['', [Validators.required]]
    });
    this.skillUpdateForm = this.formBuilder.group({
      skillExperience: ['', [Validators.required]],
      skillId: ['', [Validators.required]]
    });
    this.skillService.getAllSkills()
      .subscribe(
        data => {
          this.skillsList = data;
        },
        err => {
          alert(err.error);
        }
      );
      this.loadSkills();
  }

  addSkill() {
    this.skillExperience = new SkillExperience();
    this.skillExperience.freelancerId = Number(localStorage.getItem('freelancerId'));
    this.skillExperience.skillId = this.skillForm.value.skillId;
    this.skillExperience.years = this.skillForm.value.skillExperience;
    console.log(this.skillExperience);

    this.skillExperienceService.addExperience(this.skillExperience)
      .subscribe(
        data => {
          alert(data);
        },
        err => {
          alert(err.error);
        }
      );
  }
  updateSkill() {
    const years = this.skillUpdateForm.value.skillExperience;
    const freelancerId = Number(localStorage.getItem('freelancerId'));
    const skillId = this.skillUpdateForm.value.skillId;
    this.skillExperienceService.updateSkillExp(skillId, freelancerId, years)
      .subscribe(
        data => {
          alert(data);
          window.location.reload();
        },
        err => {
          console.log(err.error);
          window.location.reload();
        }
      );
  }
  loadSkills() {
    this.skillExperienceService.getAllSkills(Number(localStorage.getItem('freelancerId')))
      .subscribe(
        data => {
          console.log(data);
          this.skillsOfFreelancer = data;
        },
        err => {
          alert(err.error);
        }
      );
  }
  goBack() {
    this.router.navigate(["../freelancer"]);
  }



}
