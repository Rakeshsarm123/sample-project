import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ValuesComponent } from './nutrition/values/values.component';
import { DetailsComponent } from './nutrition/details/details.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { DiettypeComponent } from './dietplan/diettype/diettype.component';
import { TypedetailsComponent } from './dietplan/typedetails/typedetails.component';
import { SharedModule } from '../shared/shared.module';
import { AddtocartComponent } from './nutrition/addtocart/addtocart.component';





const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
  {path:"Nutrition",component:NutritionComponent},
  {path:"contact",component:ContactComponent},
  {path:"dietplan",component:DietplanComponent},
  {path:"Vegetables",component:VegetablesComponent},
  {path:"details",component:DetailsComponent},
  {path:"addtocart",component:AddtocartComponent},
  {path:":id",component:DetailsComponent}
  
  ]
  

},

]

@NgModule({
  declarations: [
    HomeComponent,
    FilterPipe,
    UserhomeComponent,
    NutritionComponent,
    ValuesComponent,
    DetailsComponent,
    VegetablesComponent,
    ContactComponent,
    DietplanComponent,
    DiettypeComponent,
    TypedetailsComponent,
    AddtocartComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class UserModule { }