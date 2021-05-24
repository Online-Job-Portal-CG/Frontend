import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobapplicationService {
  baseUrl = "http://localhost:8001/jobApplication";
  constructor(private http: HttpClient) { }

  //POST Method
  public applyToJob(jobapplication: JobApplication): Observable<any> {
    console.log("Apply to Job Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/apply`, jobapplication, { headers, responseType:'text' as 'json' });
  }

  //GET Method
  public findAll(): Observable<any> {
    console.log("Find All Applications Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findAll`, { headers, responseType: 'json' });
  }

  //DELETE Mapping
  public withdrawApplication(id: number): Observable<any> {
    console.log("Withdraw Job Application");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers, responseType: 'json' });
  }

  //PUT Mapping
  public updateApplication(id: number, jobapplication: JobApplication): Observable<any> {
    console.log("Update Job Application");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update/${id}`, jobapplication, { headers, responseType: 'json' });
  }

  //GET Mapping
  public getAllApplicants(jobId: number): Observable<any> {
    console.log("Find Applications for a Job method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findAll/job/${jobId}`,{ headers, responseType: 'json' });
  }

  //GET Method
  public findByFreelancerId(jobId: number, freelancerId: number) {
    console.log("Find Applications for a Job method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findByFrId/job/${jobId}/frId/${freelancerId}`,{headers, responseType: 'json'});
  }

}

export class JobApplication {
  jobId: number;
  coverLetter: string;
  freelancerId: number;
}
