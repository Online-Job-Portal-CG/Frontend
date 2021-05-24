import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skill, SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  newSkillForm: FormGroup;
  skill:Skill;
  constructor(private skillService: SkillService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.skill = new Skill();
    this.newSkillForm = this.formBuilder.group({
      skillName: ['', Validators.required],
      skillDescription: ['', Validators.required]
    });
  }
  onSubmit() {
    this.skill = new Skill();
    this.skill.name = this.newSkillForm.value.skillName;
    this.skill.description = this.newSkillForm.value.skillDescription;
    console.log(this.skill);
    this.skillService.createSkill(this.skill)
      .subscribe(
        data=>{
          console.log(data);
          alert(data);
        },
        err=>{
          alert(err.error);
        }
      );
  }
  goBack(){
    this.router.navigate(['../../admin']);
  }

}
