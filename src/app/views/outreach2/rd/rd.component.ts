import { Component, ViewChild } from '@angular/core';
// import { RDComponent } from '../../Outreach2Module/rd1/rd.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rd',
  templateUrl: './rd.component.html',
  styleUrls: ['./rd.component.scss']
})
export class RdComponent {


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


  update(e:any){
    this.selectedYear = e.target.value
  }


  @ViewChild('rd') reigonaldiversity=RdComponent;

  studentsFromOthStates!:number;
  studentsFromOthCntry!:number;
oth_states=new FormControl("",Validators.required);
oth_countries=new FormControl("",Validators.required);



  getRD(){
console.log(this.reigonaldiversity);
console.log(this.selectedYear);
}
}