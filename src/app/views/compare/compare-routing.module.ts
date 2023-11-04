import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareCollegeComponent } from './compare-college/compare-college.component';

const routes: Routes = [
{
  path:'',
  data:{
    title:"Comparison"
  },
  children:[
{
  path:'compare_college',
  component:CompareCollegeComponent,
  data:{
    title:'Comparison of colleges'
  },

},

  ]
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareRoutingModule { }
