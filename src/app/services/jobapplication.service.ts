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
    return this.http.post(`${this.baseUrl}/apply`, jobapplication, { headers, responseType: 'json' });
  }

  //GET Method
  public findById(id: number): Observable<any> {
    console.log("Find Job Application by Id");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findById/${id}`, { headers, responseType: 'json' });
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
}

export class JobApplication {
  jobId: number;
  coverLetter: string;
}
