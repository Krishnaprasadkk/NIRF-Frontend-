import { NgForOfContext } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-fppp',
  templateUrl: './fppp.component.html',
  styleUrls: ['./fppp.component.scss'],
  providers:[dataservice,HttpClient]
})
export class FpppComponent {

  getCurrentYear(){
    return new Date().getFullYear();
  }
constructor(private dataService:dataservice)
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

fundingval:any={
  "research_fundings":0,
  "consultation_fundings":0,
  "edp_fundings":0,
  "year":0,
  "college":0
}


research_fundings!:number;
consultation_fundings!:number;
edp_fundings!:number;

research_fund=new FormControl("",Validators.required);
const_funding=new FormControl("",Validators.required);
edp_fund=new FormControl("",Validators.required);
@ViewChild('fppp') public fpppval!:NgForm;

res:any
ngOnInit(): void {
  
  this.res=this.dataService.userLoggedIn();
  this.dataService.getPostOrPut(this.urlval,this.selectedYear);

  
}
//this is the url
urlval=""

getfppp(){
console.log(this.fpppval);
console.log("hello")

this.res=this.dataService.userLoggedIn();
this.fundingval.college=this.dataService.userData.id;
console.log("hello")

this.fundingval.research_fundings=this.fpppval.value['RF'],
this.fundingval.consultation_fundings=this.fpppval.value['CF']
this.fundingval.edp_fundings=this.fpppval.value['edp']
this.fundingval.year=this.selectedYear;
console.log(this.fundingval)
this.dataService.sendData(this.fundingval,this.urlval,this.selectedYear);
  }


}
