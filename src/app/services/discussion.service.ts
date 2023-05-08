import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
 

httpOptions:any;
  apiUrl: any;
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;
constructor(private http:HttpClient) { }

getReviews():Observable<any> {
return this.http.get("http://localhost:4500/forum")
}
postReview(obj:any):Observable<any>{
this.httpOptions = new HttpHeaders({
'Content-Type': 'application/json',
'Authorization': "Bearer"+localStorage.getItem("token")
})
return this.http.post("http://localhost:4500/forum",obj,this.httpOptions);
}
removeDietPlan (id:any): Observable<any>{
  return this.http.delete(`${this.apiUrl}nutrition/${id}`, { headers: this.headers });
 }
}
