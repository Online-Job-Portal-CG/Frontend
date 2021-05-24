import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  baseUrl = "http://localhost:8001/recruiter";
  recruiterId: number;
  constructor(private http: HttpClient) { }

  //POST Method
  public addRecruiter(recruiter: Recruiter): Observable<any> {
    console.log("Create new Recruiter");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, recruiter, { headers, responseType: 'text' as 'json' });
  }

  //GET Method
  public getById(id: number): Observable<any> {
    console.log("Get Recruiter by Id");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/id/${id}`, { headers, responseType: 'json' });
  }
  //GET Method
  public getByName(name: string): Observable<any> {
    console.log("Get Recruiter by Name");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/name/${name}`, { headers, responseType: 'json' });
  }
  //PUT Method
  public update(id: number, recruiter: Recruiter): Observable<any> {
    console.log("Update Recruiter");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update/${id}`, recruiter, { headers, responseType: 'text' as 'json' });
  }

  //GET Method
  public findAll(): Observable<any> {
    console.log("Find all Recruiters");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAll`, { headers, responseType: 'json' });
  }
}

export class Recruiter {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}
