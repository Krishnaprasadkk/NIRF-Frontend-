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
  years:any[]=["select the year",this.currYear,this.currYear-1,this.currYear-2,this.currYear-3,this.currYear-4,this.currYear-5];

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
"totalphd":0,
"college":0
}

@ViewChild('ss') StudentStrength!:NgForm;


res:any

ngOnInit(): void {
  
  this.res=this.dataService.userLoggedIn();
  
  
  this.StudentData.college=this.dataService.userData.id;
  
  
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear);
  
  // this.dataService.getPostOrPut2(this.urlget,this.selectedYear,this.dataService.collegeId);

  
}

//url
urlval="http://127.0.0.1:8000/api/sses/"
urlget="http://127.0.0.1:8000/api/ssget/"
update(e:any){
  // console.log(this.res)
   this.StudentData.college=this.dataService.userData.id
  // console.log(this.fsrdata)
  // console.log(this.fsrdata.college)
  this.selectedYear = <number>e.target.value;
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear)
  // this.dataService.getPostOrPut2(this.urlget,this.selectedYear,this.dataService.collegeId);
  this.res=this.dataService.userLoggedIn();
  console.log(this.dataService.userData);



}


// urlval="http://127.0.0.1:8000/api/sses/"

selectedYear!:number;
getData(){
  
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear)
  // this.dataService.getPostOrPut2(this.urlget,this.selectedYear,this.dataService.collegeId);
  
  this.StudentData.year=<number> this.selectedYear;
  this.StudentData.college=this.dataService.userData.id
  console.log(this.StudentData.id)
  this.StudentData.sanctionedApprovedIntake=this.sanctionedApprovedIntake;
  this.StudentData.actualIntake=this.actualIntake;
  this.StudentData.totalphd=this.totalphd;
  this.dataService.sendData(this.StudentData,this.urlval,this.selectedYear);
  console.log(this.StudentData);

}

}
