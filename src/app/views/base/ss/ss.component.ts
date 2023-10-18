import { Component } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl } from '@angular/forms';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.scss']
})
export class SsComponent {
  getCurrentYear(){
    return new Date().getFullYear();
  }
constructor()
{
  this.selectedYear=this.years[0];
}
  currYear=this.getCurrentYear();
  curr:number=this.currYear;
  years:number[]=[this.currYear,this.currYear-1,this.currYear-2,this.currYear-3,this.currYear-4,this.currYear-5];

  sanctionedApprovedIntake!:number;
  actualIntake!:number;

  totalphd!:number;

  approvedIntake=new FormControl("",Validators.required)

  actual_intake= new FormControl("",Validators.required)

  total_phd= new FormControl("",Validators.required)



  selectedYear:any;
getData(){


}

}
