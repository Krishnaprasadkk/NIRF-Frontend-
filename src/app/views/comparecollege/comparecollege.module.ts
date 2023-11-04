import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparecollegeRoutingModule } from './comparecollege-routing.module';
import { ComparisonComponent } from './comparison/comparison.component';


@NgModule({
  declarations: [
    ComparisonComponent
  ],
  imports: [
    CommonModule,
    ComparecollegeRoutingModule
  ]
})
export class ComparecollegeModule { }
