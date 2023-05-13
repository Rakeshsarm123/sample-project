import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NutritionComponent } from './user/nutrition/nutrition.component';
import { VegetablesComponent } from './user/vegetables/vegetables.component';
import { DetailsComponent } from './user/nutrition/details/details.component';
import { ContactComponent } from './user/contact/contact.component';
import { DietplanComponent } from './user/dietplan/dietplan.component';
import { DietPlanFormComponent } from './admin/diet-plan-form/diet-plan-form.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
