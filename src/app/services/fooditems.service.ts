import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooditemsService{
  getPrroducts() {
    throw new Error('Method not implemented.');
  }


  getCat() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  getProducts(): Observable<any>{
    return this.http.get("http://localhost:4500/nutrition")
  }
  updatecart(obj:any,id:any){
    return this.http.patch("http://localhost:4500/users/"+id,obj)
  }
  getUsers(){
    return this.http.get("http://localhost:4500/users");
  }
  getUserbyId(id:any){
    return this.http.get("http://localhost:4500/users/"+id);
  }
 
}
