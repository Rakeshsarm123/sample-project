import { Component } from '@angular/core';
import { NutritionService } from '../../services/nutrition.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any;
  details:any;
  constructor(private Ds:NutritionService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next:(params)=>{
          this.id=params['id']
          this.readData()
},

error:()=>this.id=0

 }
)
}
readData(){
this.Ds.getDetails(this.id).subscribe(
 {
next:(data:any)=>this.details=data,
error:()=>this.details={}
}
)
}


}
