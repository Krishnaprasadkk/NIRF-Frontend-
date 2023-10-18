import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fru',
  templateUrl: './fru.component.html',
  styleUrls: ['./fru.component.scss']
})
export class FruComponent {

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

  selectedYear!:number;

  capitalExp!:number;
  operationalExp!:number;

  capital_exp=new FormControl("",Validators.required)

operational_exp=new FormControl("",Validators.required)

  getFru(){

  }

}
