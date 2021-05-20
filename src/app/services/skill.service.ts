import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  baseUrl = "http://localhost:8001/skills"
  constructor(private http: HttpClient) { }
  //POST Method
  public createSkill(skill: Skill): Observable<any> {
    console.log("Create Skill Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, skill, { headers, responseType:'text' as 'json' });
  }

  //GET Method
  public getAllSkills(): Observable<any> {
    console.log("Get All Skills");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAll`, { headers, responseType: 'json' });
  }

  //DELETE Method
  public deleteSkill(id: number): Observable<any> {
    console.log("Delete Skill by Id");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/remove/${id}`, { headers, responseType: 'json' });
  }

  //PUT Method
  public updateSkill(id: number, skill: Skill): Observable<any> {
    console.log("Update Skill");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update/${id}`, skill, { headers, responseType: 'json' });
  }
}
export class Skill {
  name: string;
  description: string;
}