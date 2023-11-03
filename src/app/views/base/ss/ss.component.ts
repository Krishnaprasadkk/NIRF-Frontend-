import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { dataservice } from 'src/app/services/data.service';
import { cond } from 'lodash-es';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.scss'],
  providers:[dataservice,HttpClient]
})
export class SsComponent {
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

  sanctionedApprovedIntake!:number;
  actualIntake!:number;

  totalphd!:number;

  approvedIntake=new FormControl("",Validators.required)

  actual_intake= new FormControl("",Validators.required)

  total_phd= new FormControl("",Validators.required)

StudentData:any={
"year":0,
"sanctionedApprovedIntake":0,
"actualIntake":0,
"totalphd":0

}

@ViewChild('ss') StudentStrength!:NgForm;

//url

urlval=" "
  selectedYear:any;
getData(){

  this.StudentData.year=<number> this.selectedYear;
  this.StudentData.sanctionedApprovedIntake=this.sanctionedApprovedIntake;
  this.StudentData.actualIntake=this.actualIntake;
  this.StudentData.totalphd=this.totalphd;
  this.dataService.sendData(this.StudentData,this.urlval);
  console.log(this.StudentData);

}

}
