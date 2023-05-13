import { Component } from '@angular/core';
import { NutritionService } from '../services/nutrition.service';


@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent {
  types=[
    "All",
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
  selected="All";
  names:any;
  constructor(is:NutritionService){
    is.getNutrition().subscribe(
      {
        next:(data:any)=>this.names=data,
        error:()=>this.names=[]
      }
    )
  }
 
}


