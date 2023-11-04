import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparecollegeRoutingModule } from './comparecollege-routing.module';
import { ComparisonComponent } from './comparison/comparison.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComparisonComponent
  ],
  imports: [
    CommonModule,
    ComparecollegeRoutingModule,
    FormsModule
  ]
})
export class ComparecollegeModule { }
