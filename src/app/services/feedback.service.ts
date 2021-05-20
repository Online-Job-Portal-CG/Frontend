import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  baseUrl = "http://localhost:8001/feedbacks";
  constructor(private http: HttpClient) { }

  //POST Method
  public addFeedback(feedbackDto: FeedbackDTO): Observable<any> {
    console.log("Create New Feedback");
    console.log(feedbackDto);
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`,feedbackDto, { headers, responseType:'json' });
  }

  //GET Method
  public getFeedbackForFreelancer(id: string): Observable<any> {
    console.log("Get Feedbacks for Freelancer");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/${id}`, { headers, responseType: 'json' });
  }

  //GET Method
  public getAverageRatings(id: string): Observable<any> {
    console.log("Get Average Ratings for Freelancer");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/avgRatingsFor/${id}`, { headers, responseType: 'json' });
  }
}

export class FeedbackDTO {
  ranges: number;
  comments: string;
  recruiterId: string;
  freelancerId: string;
}
