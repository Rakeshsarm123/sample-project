import { Component } from '@angular/core';
import { NutritionService } from '../../services/nutrition.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any;
  details:any;
  state:any;
  constructor(private Ds:NutritionService,private ar:ActivatedRoute,private router:Router){
    this.state=router.getCurrentNavigation()?.extras.state
    this.details=this.state;


}
}
