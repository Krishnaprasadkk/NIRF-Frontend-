import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparisonComponent } from './comparison/comparison.component';

const routes: Routes = [
{
  path:'',
  data:{
    title:"comparison"
  },
  children:[
    {
      path:'compare',
      component:ComparisonComponent,
      data:{
        title:"Compare college"
      },

    }
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComparecollegeRoutingModule { }
