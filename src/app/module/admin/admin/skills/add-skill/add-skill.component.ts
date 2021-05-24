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
  skillForm: FormGroup;
  skill:Skill;
  constructor(private skillService: SkillService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.skill = new Skill();
    
    this.skillForm = this.formBuilder.group({
      skillName: ['', Validators.required],
      skillDescription: ['', Validators.required]
    });
  }
  onSubmit() {
    this.skill = new Skill();
    this.skill.name = this.skillForm.value.skillName;
    this.skill.description = this.skillForm.value.skillDescription;
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
