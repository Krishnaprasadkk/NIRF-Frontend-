import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { ResearchRoutingModule } from './research-routing.module';
import { FpppComponent } from './fppp/fppp.component';


@NgModule({
  declarations: [
    FpppComponent
  ],
  imports: [FormsModule,
    CommonModule,
    ResearchRoutingModule
  ]
})
export class ResearchModule { }
