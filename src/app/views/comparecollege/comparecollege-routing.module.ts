import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparisonComponent } from './comparison/comparison.component';


const routes: Routes = [
{
  path :'',
  data:{title:"compare college"},
  children:[
    {
      path:'compareCollege',component:ComparisonComponent,data:{title:"college Comparison"}
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComparecollegeRoutingModule { }
