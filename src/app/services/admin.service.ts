import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: string = "http://localhost:8001/admin";
  constructor(private http: HttpClient) { }

  //GET Method
  public findById(id: number): Observable<any> {
    console.log("Find Admin by id method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/find/id/${id}`, { headers, responseType: 'json' });
  }

  //GET Method
  public findByName(name: string): Observable<any> {
    console.log("Find Admin by userName method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/find/name/${name}`, { headers, responseType: 'json' });
  }

  //POST Method
  public addAdmin(admin: Admin): Observable<any> {
    console.log("Add Admin Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/save`, admin, { headers, responseType:'text' as 'json' });
  }

  //PUT Method
  public updateAdmin(id: number, admin:Admin): Observable<any> {
    console.log("Update Admin Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update/${id}`, admin, { headers, responseType:'text' as 'json' });
  }
}

export class Admin {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}
