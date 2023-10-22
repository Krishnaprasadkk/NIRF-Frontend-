import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { ResearchRoutingModule } from './research-routing.module';
import { FpppComponent } from './fppp/fppp.component';
import { PuComponent } from './pu/pu.component';
import { QpComponent } from './qp/qp.component';
import { IprComponent } from './ipr/ipr.component';


@NgModule({
  declarations: [
    FpppComponent,
    PuComponent,
    QpComponent,
    IprComponent
  ],
  imports: [FormsModule,
    CommonModule,
    ResearchRoutingModule
  ]
})
export class ResearchModule { }
