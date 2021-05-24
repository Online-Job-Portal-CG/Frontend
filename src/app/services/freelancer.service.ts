import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  baseUrl = "http://localhost:8001/freelancer";
  freelancerId: number;
  constructor(private http: HttpClient) { }

  //POST Method
  public addFreelancer(freelancer: Freelancer): Observable<any> {
    console.log("Add Freelancer Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, freelancer, { headers, responseType:'text' as 'json' });
  }

  //GET Method
  public getById(id: number): Observable<any> {
    console.log("Get Freelancer by Id");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/id/${id}`, { headers, responseType: 'json' });
  }

  //GET Method
  public getByUserName(userName: string): Observable<any> {
    console.log("Get Freelancer by Name");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/name/${userName}`, { headers, responseType: 'json' });
  }

  //PUT Method
  public updateFreelancer(id: number, freelancer: Freelancer): Observable<any> {
    console.log("Update Freelancer Details");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update/${id}`, freelancer, { headers, responseType: 'json' });
  }

  //GET Method
  public listAll(): Observable<any> {
    console.log("List Freelancers");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/listAll`, { headers, responseType: 'json' });
  }

  public getFreelancerId() {
    return this.freelancerId;
  }
  public setFreelancerId(freelancerId: number) {
    this.freelancerId = freelancerId;
  }
}

export class Freelancer {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}
