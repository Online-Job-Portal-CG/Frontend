import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  id: number;
  role: string;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private recruiterService: RecruiterService,
    private freelancerService: FreelancerService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginId: ['', [Validators.required]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onsubmit() {
    console.log("Form Submission attempted");
    const role = this.loginForm.get('role').value;
    const loginId = this.loginForm.get('loginId').value;
    const password = this.loginForm.get('password').value;

    //Admin Role
    if (role === '1') {
      this.adminService.findByName(loginId).subscribe(
        data => {
          console.log(data.userName);
          if (data.password === password) {
            alert("Logged in Successfully");
            this.redirect("admin");
          } else {
            alert("Invalid Login Details!");
          }
        }, err => {
          console.log(err);
          if (err.status === 400) {
            alert(err.error);
          }
        });

    }

    //Recruiter Role
    else if (role === '2') {
      this.recruiterService.getByName(loginId).subscribe(
        data => {
          console.log(data.userName);
          if (data.password === password) {
            alert("Logged in Successfully");
            this.redirect("recruiter");
          } else {
            alert("Invalid Login Details!");
          }
        }, err => {
          console.log(err);
          if (err.status === 400) {
            alert(err.error);
          }
        });
    }

    //Freelancer Role
    else if (role === '3') {
      this.freelancerService.getByUserName(loginId).subscribe(
        data => {
          console.log(data.userName);
          if (data.password === password) {
            alert("Logged in Successfully");
            this.redirect("freelancer");
          } else {
            alert("Invalid Login Details!");
          }
        }, err => {
          console.log(err);
          if (err.status === 400) {
            alert(err.error);
          }
        });
    }
  }

  redirect(role: string) {
    this.router.navigate([`${role}`]);
  }

}
