import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  constructor(private http:HttpClient){ }
  
  getNutrition():Observable<any>{
    
    return this.http.get("http://localhost:4500/nutrition");
   }
   getDetails(id: any):Observable<any>{
    return this.http.get("http://localhost:4500/nutrition/"+id)
   }
}
