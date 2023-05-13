import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DietPlanService } from 'src/app/services/diet-plan.service';
import { nutrition } from '../home/nutrition-model';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-diet-plan-form',
  templateUrl: './diet-plan-form.component.html',
  styleUrls: ['./diet-plan-form.component.css']
})

export class DietPlanFormComponent {
  types=[
    "Dairy products",
    "Fats, Oils, Shortenings",
    "Meat, Poultry",
    "Fish, Seafood",
    "Vegetables A-E",
    "Vegetables F-P",
    "Vegetables R-Z",
    "Fruits A-F",
    "Fruits G-P",
    "Fruits R-Z",
    "Breads, cereals, fastfood,grains",
    "Soups",
    "Desserts, sweets",
    "Seeds and Nuts",
    "Drinks,Alcohol, Beverages"	
  ]
  selected="";


  ngOnInit() {
  }
  model: nutrition = new nutrition();

  constructor(private dietPlanService: DietPlanService ,
    private matSnackBar: MatSnackBar,
    private route: Router) { }


  onSubmit(data){
    this.dietPlanService.addDietPlan(this.model).subscribe(res=>{
      this.matSnackBar.open("Diet Plan Added Successfully","Ok",{duration: 3000});
      this.route.navigate(['home'])
;    })
  }

}
