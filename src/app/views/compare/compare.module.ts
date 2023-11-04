import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareCollegeComponent } from './compare-college/compare-college.component';


@NgModule({
  declarations: [
    CompareCollegeComponent
  ],
  imports: [
    CommonModule,
    CompareRoutingModule
  ]
})
export class CompareModule { }
