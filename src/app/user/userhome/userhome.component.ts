import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  constructor(private route:ActivatedRoute,private router: Router){}
 
  navigateToVegetables() {
    this.router.navigate(['Vegetables'],{relativeTo:this.route});
  }
  navigateToDietPlan(){
    this.router.navigate(['dietplan'],{relativeTo:this.route});
  }
  navigateToNutrition(){
    this.router.navigate(['Nutrition'],{relativeTo:this.route});
  }
  navigateToCart(){
    this.router.navigate(['addtocart'],{relativeTo:this.route})
  }
  navigateToContact(){
    this.router.navigate(['contact']),{relativeTo:this.route}
  }
}
