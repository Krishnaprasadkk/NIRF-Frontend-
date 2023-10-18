import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RDComponent } from './rd/rd.component';
import { WDComponent } from './wd/wd.component';
import { Title } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';
import { ReigonalDiversityComponent } from './reigonal-diversity/reigonal-diversity.component';

const routes: Routes = [
  {
    path:'',
    data:{
      Title:"parameter 3"

    },
    children:[
      {
        path:'rd',
        component:RDComponent,
        data:{
          Title:"RD"
        },
      },
      {
        path:'wd',
      component:WDComponent,
      data:{
        Title:"WD"
      },
      },
      {
        path:'reigonalDiversity',
        component:ReigonalDiversityComponent,
        data:{
          Title:"ReigonalDiversity"
        },

      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutreachRoutingModule { }
