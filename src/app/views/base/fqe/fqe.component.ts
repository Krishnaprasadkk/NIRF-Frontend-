import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-fqe',
  templateUrl: './fqe.component.html',
  styleUrls: ['./fqe.component.scss']
})
export class FqeComponent {

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

  totalphd!:number;
  phdUptoEight!:number;
  phdEightToFifteen!:number;
  phdAboveFifteeen!:number;

phd_under8= new FormControl("",Validators.required)
phd_8to15= new FormControl("",Validators.required)
phd_above15= new FormControl("",Validators.required)
phd_total= new FormControl("",Validators.required)


@ViewChild('phd') phdvalue!:NgForm;
  setPhd(){
console.log(this.phdvalue);
console.log(this.totalphd)
  }

}
