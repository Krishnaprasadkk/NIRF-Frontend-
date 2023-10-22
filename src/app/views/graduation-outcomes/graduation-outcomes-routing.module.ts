import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GueComponent } from './gue/gue.component';
import { GphdComponent } from './gphd/gphd.component';

const routes: Routes = [
  {
    path:'',
    data:{
      title:"parameter 3"
    },
    children:[
      {
        path:'gue',component:GueComponent,data:{title:"University Exams"}
      },
      {
        path:'gphd',
        component:GphdComponent,data:{title:"number of Ph.D students graduated"}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduationOutcomesRoutingModule { }
