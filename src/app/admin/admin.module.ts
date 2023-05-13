import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { DietPlanFormComponent } from './diet-plan-form/diet-plan-form.component';
import { MaterialModule } from '../material/material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AfilterPipe } from '../pipes/afilter.pipe';
import { AdminHomeComponent } from './admin-home/admin-home.component';


const routes: Routes = [
{path: "home",component: HomeComponent,
children:[
  {
    path:"",
    component: AdminHomeComponent,
  },
  {
    path:"adddietplan",
    component: DietPlanFormComponent,
  }
  ]},

];

@NgModule({
  declarations: [
    HomeComponent,
    DietPlanFormComponent,
    AfilterPipe,
    AdminHomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    Ng2SearchPipeModule,
    RouterModule
  ]
})
export class AdminModule { }
