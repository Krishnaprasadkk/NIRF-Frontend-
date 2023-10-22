import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FpppComponent } from './fppp/fppp.component';
import { PuComponent } from './pu/pu.component';
import { QpComponent } from './qp/qp.component';
import { IprComponent } from './ipr/ipr.component';

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
      },
      {
path:'pu',
component:PuComponent,
data:{
  title:"metric for publications"
}
      },
      {
path:'qp',
component:QpComponent,
data:
{
  title:"Qulaity of Publications"
}
      },
      {
path:'ipr',
component:IprComponent,
data:{

  title:"Published and granted patents"


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
