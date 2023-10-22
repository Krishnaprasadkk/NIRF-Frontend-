import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { RDComponent } from '../outreach/rd1/rd.component';
// import { Title } from '@angular/platform-browser';

import { EscsComponent } from './escs/escs.component';
import { RdComponent } from './rd/rd.component';
import { WdComponent } from './wd/wd.component';


const routes: Routes = [
  {
    path:'',
    data:{
      title:"parameter 3"

    },

    children:[
      {
        path:'rd',
        component:RdComponent,
        data:{
          title:"Reigonal Diversity"
        },
      },
      {
        path:'wd',
        component:WdComponent,
        data:{
          title:"Women-Diversity",

        },

      },
      {
        path:'escs',
        component:EscsComponent,
        data:{
          title:"ESCS"
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Outreach2RoutingModule { }
