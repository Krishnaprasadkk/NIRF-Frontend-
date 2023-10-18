import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutreachRoutingModule } from './outreach-routing.module';
import { WDComponent } from './wd/wd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RDComponent } from './rd/rd.component';
import { ReigonalDiversityComponent } from './reigonal-diversity/reigonal-diversity.component';


@NgModule({
  declarations: [
    WDComponent,
    RDComponent,
    ReigonalDiversityComponent,
  ],
  imports: [
    CommonModule,
    OutreachRoutingModule

  ]

})
export class OutreachModule { }
