import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Outreach2RoutingModule } from './outreach2-routing.module';
import { RdComponent } from './rd/rd.component';
import { WdComponent } from './wd/wd.component';
import { EscsComponent } from './escs/escs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RdComponent,
    WdComponent,
    EscsComponent
  ],
  imports: [FormsModule,
    CommonModule,
    Outreach2RoutingModule
  ]
})
export class Outreach2Module { }
