import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ValuesComponent } from './nutrition/values/values.component';
import { DetailsComponent } from './nutrition/details/details.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';





const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    FilterPipe,
    UserhomeComponent,
    HeaderComponent,
    NutritionComponent,
    ValuesComponent,
    DetailsComponent,
    VegetablesComponent,
    ContactComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }