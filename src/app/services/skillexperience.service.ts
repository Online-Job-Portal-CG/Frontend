import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillexperienceService {
  baseUrl = "http://localhost:8001/skillExperience";
  constructor(private http: HttpClient) { }

  //POST Method
  public addExperience(skillExp: SkillExperience): Observable<any> {
    console.log("Add Skill Experience");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, skillExp, { headers, responseType: 'json' });
  }
  //GET Method
  public getExperienceById(id: number): Observable<any> {
    console.log("Get Experience by Id");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/id/${id}`, { headers, responseType: 'json' });
  }

  //PUT Method
  public updateSkillExp(id: number, years: number): Observable<any> {
    console.log("Update Experience");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update/${id}`, years, { headers, responseType: 'json' });
  }
}

export class SkillExperience {
  years: number;
  skillId: number;
  freelancerId: number;
}
