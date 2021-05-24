import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin, AdminService } from 'src/app/services/admin.service';
import { Freelancer, FreelancerService } from 'src/app/services/freelancer.service';
import { Recruiter, RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  admin: Admin;
  recruiter: Recruiter;
  freelancer: Freelancer;
  id: number;
  role: string;
  signUpFormSubmitAttempt: boolean;
  loginFormSubmitAttempt: boolean;
  
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private recruiterService: RecruiterService,
    private freelancerService: FreelancerService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginId: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onsubmit() {
    console.log("Login Form Submission attempted");
    this.loginFormSubmitAttempt = true;
    if (this.loginForm.valid) {
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
              this.redirect("admin-dashboard");
              localStorage.setItem('loggedIn', "true");
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
              // this.recruiterService.setRecruiterId(data.id);
              // console.log(this.recruiterService.getRecruiterId());
              localStorage.setItem('recruiterUName', loginId);
              localStorage.setItem('recruiterId', data.id);
              this.redirect("recruiter-dashboard");
              localStorage.setItem('loggedIn', "true");
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
              localStorage.setItem('freelancerUName', loginId);
              localStorage.setItem('freelancerId', data.id);
              this.freelancerService.setFreelancerId(data.id);
              this.redirect("freelancer-dashboard");
              localStorage.setItem('loggedIn', "true");
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
  }

  isSignUpFieldInvalid(field: string) {
    return (
      (!this.signUpForm.get(field).valid && this.signUpForm.get(field).touched) ||
      (this.signUpForm.get(field).untouched && this.signUpFormSubmitAttempt)
    );
  }

  isLoginFieldInvalid(field: string) {
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.loginFormSubmitAttempt)
    );
  }

  createUser() {
    if (this.signUpForm.valid) {
      console.log("Trying to create a new user");
      this.role = this.signUpForm.value.role;
      console.log(this.role);
      if(this.role==='1') {
        console.log("Creating new Admin.");
        this.admin = new Admin();
        this.admin.firstName = this.signUpForm.value.firstName;
        this.admin.lastName = this.signUpForm.value.lastName;
        this.admin.userName = this.signUpForm.value.userName;
        this.admin.password = this.signUpForm.value.password;
        console.log(this.admin);
        this.adminService.addAdmin(this.admin)
          .subscribe(
            data =>{
              console.log(data);
              this.router.navigate(['login']);
            },
            err =>{
              alert(err.error);
            }
          );
      }
      else if(this.role === '2') {
        console.log("Creating new Recruiter");
        var recruiter: Recruiter = new Recruiter();
        recruiter.firstName = this.signUpForm.value.firstName;
        recruiter.lastName = this.signUpForm.value.lastName;
        recruiter.userName = this.signUpForm.value.userName;
        recruiter.password = this.signUpForm.value.password;
        console.log(recruiter);
        this.recruiterService.addRecruiter(recruiter)
          .subscribe(
            data =>{
              console.log(data);
              this.router.navigate(['/login']);
            },
            err=>{
              alert(err.error);
            }
          );
      }
      else if(this.role === '3') {
        console.log("Creating new Freelancer");
        var freelancer: Freelancer = new Freelancer();
        freelancer.firstName = this.signUpForm.value.firstName;
        freelancer.lastName = this.signUpForm.value.lastName;
        freelancer.userName = this.signUpForm.value.userName;
        freelancer.password = this.signUpForm.value.password;
        console.log(freelancer);
        this.freelancerService.addFreelancer(freelancer)
          .subscribe(
            data =>{
              console.log(data);
              this.router.navigate(['/login']);
            },
            err=>{
              alert(err.error);
            }
          )
      }
    }
    this.signUpFormSubmitAttempt = true;
  }

  redirect(role: string) {
    this.router.navigate([`${role}`]);
  }

}
