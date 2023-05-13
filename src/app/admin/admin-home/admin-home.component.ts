import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DietPlanService } from 'src/app/services/diet-plan.service';
import { FooditemsService } from 'src/app/services/fooditems.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  gdata: any;
  searchText: any;

  constructor(private cs: FooditemsService, private dietPlanService: DietPlanService, private matSnackBar: MatSnackBar, private router: Router,private route:ActivatedRoute) {
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
    this.router.navigate(['adddietplan'],{relativeTo:this.route});
  }
}
