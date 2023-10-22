import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduationOutcomesRoutingModule } from './graduation-outcomes-routing.module';
import { GueComponent } from './gue/gue.component';
import { GphdComponent } from './gphd/gphd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GueComponent,
    GphdComponent
  ],
  imports: [
    CommonModule,
    GraduationOutcomesRoutingModule,FormsModule,
    ReactiveFormsModule,
  ]
})
export class GraduationOutcomesModule { }
