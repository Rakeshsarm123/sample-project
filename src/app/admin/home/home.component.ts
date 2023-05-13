import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DietPlanService } from 'src/app/services/diet-plan.service';
import { FooditemsService } from 'src/app/services/fooditems.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  gdata: any;
  searchText: any;

  constructor(private cs: FooditemsService, private dietPlanService: DietPlanService, private matSnackBar: MatSnackBar, private router: Router) {
    this.getProducts();
  }

  removeItem(id: any) {
    this.dietPlanService.removeDietPlan(id).subscribe(res => {
      this.matSnackBar.open(`product removed from plan`, 'Ok', { duration: 3000 });
      this.getProducts();
    });
  }

  getProducts() {
    this.gdata = this.cs.getProducts().subscribe({
      next: (data: any) => this.gdata = data,
      error: () => this.gdata = []
    });
  }
  navigateToAddDietPlan() {
    this.router.navigate(['../../add-diet-plan']);
  }
  
}
