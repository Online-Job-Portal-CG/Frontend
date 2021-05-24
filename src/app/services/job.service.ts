import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = "http://localhost:8001/job";
  constructor(private http: HttpClient) { }

  //POST Method
  public addJob(job: Job): Observable<any> {
    console.log("Create new Job Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post("http://localhost:8001/job/postJob", job, { headers, responseType: 'text' as 'json' });
  }

  //GET Method
  public findJobsBySkill(skillName: string): Observable<any> {
    console.log("Find Jobs by Skill Name");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findJobsBySkill/${skillName}`, { headers, responseType: 'json' });
  }

  //GET Method
  public findJobById(id: number): Observable<any> {
    console.log("Find Job by Id method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findById/${id}`, { headers, responseType: 'json' });
  }

  //GET Method
  public closeJob(id: number): Observable<any> {
    console.log("Close a job method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/close/${id}`, { headers, responseType:'text' as 'json' });
  }
  //GET Method
  public getAllJobs(): Observable<any> {
    console.log("Get All Jobs Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findAll`, { headers, responseType: 'json' });
  }

  //PUT Method
  public awardJob(jobId: number, freelancerId: number): Observable<any> {
    console.log("Award Job Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/awardJob/${jobId}/${freelancerId}`, { headers, responseType:'text' as 'json' });
  }

  //GET Method
  public getAllActive(): Observable<any> {
    console.log("Get All Active Jobs Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAllActive`, { headers, responseType: 'json' }); 
  }
}

export class Job {
  freelancerId: number;
  skillId: number;
  recruiterId: number;
  jobTitle: string;
  jobDescription: string;
}
