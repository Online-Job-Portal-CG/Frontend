import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkedjobService {
  private baseUrl = "http://localhost:8001/bmark/job";

  constructor(private http: HttpClient) { }

  //POST Method
  public createBookmark(bJob: BookmarkedJob): Observable<any> {
    console.log("Bookmark a job method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, bJob, { headers, responseType: 'text' as 'json' });
  }

  //DELETE Method
  public deleteById(id: number): Observable<any> {
    console.log("Delete Bookmarked Job By Id method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers, responseType: 'json' });
  }

  //GET Method
  public getById(id: number): Observable<any> {
    console.log("Get Bookmarked Job By Id method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/id/${id}`, { headers, responseType: 'json' });
  }

  //GET Method
  public getBySkill(skillName: string): Observable<any> {
    console.log("Get Bookmarked Jobs by Skill Name method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/skill/${skillName}`, {headers, responseType:'json'});
  }
  //GET Method
  public getAll(frId: number): Observable<any> {
    console.log("Get Bookmarked Jobs method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findAll/${frId}`, {headers, responseType:'json'});
  }
}

export class BookmarkedJob {
  skillId: number;
  freelancerId: number;
  jobId: number;
}