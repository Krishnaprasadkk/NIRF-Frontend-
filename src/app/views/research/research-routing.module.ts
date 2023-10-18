import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FpppComponent } from './fppp/fppp.component';

const routes: Routes = [

  {
    path:'',
    data:{
      title:"paramteter 2"
    },
    children:[
      {
        path:"fppp",
        component:FpppComponent,
        data:{
  title:"FPPP"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
