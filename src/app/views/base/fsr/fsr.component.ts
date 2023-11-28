import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-fsr',
  templateUrl: './fsr.component.html',
  styleUrls: ['./fsr.component.scss'],
  providers:[dataservice,HttpClient]
})
export class FsrComponent  {
  getCurrentYear(){
    return new Date().getFullYear();
  }
constructor(private dataService:dataservice)
{
  this.selectedYear=this.years[0];
}
  currYear=this.getCurrentYear();
  curr:number=this.currYear;
  // years:number[]=[this.currYear,this.currYear-1,this.currYear-2,this.currYear-3,this.currYear-4,this.currYear-5];
  years:any=["select the year ",this.currYear,this.currYear-1,this.currYear-2,this.currYear-3,this.currYear-4,this.currYear-5];

  selectedYear!:number;
fulltimeFaculty!:number;


@ViewChild('fsr') fsrvalue!:NgForm;
fsrdata:any={
'year':0,
'permanent_faculty':0,
'college':0
}

urlget="http://127.0.0.1:8000/api/fsrget/"
res:any
ngOnInit(): void {
  
  this.res=this.dataService.userLoggedIn();
  // this.dataService.getPostOrPut(this.geturl,this.selectedYear);
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear);

  
}

geturl="http://127.0.0.1:8000/api/fsrs/"
update(e:any){
  console.log(this.res)
  this.fsrdata.college=this.dataService.userData.id
  console.log(this.fsrdata)
  console.log(this.fsrdata.college)
  this.selectedYear = e.target.value
  // this.dataService.getPostOrPut(this.geturl,this.selectedYear);
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear);
  this.res=this.dataService.userLoggedIn();
  console.log(this.dataService.userData);



}

urlval="http://127.0.0.1:8000/api/fsrs/"
  getFaculty(){
    this.res=this.dataService.userLoggedIn();
    this.dataService.getPostOrPut3(this.urlget,this.selectedYear);
    this.fsrdata.college=this.dataService.userData.id;
    console.log(this.fsrdata.collegeId)

console.log(this.fsrvalue);
this.fsrdata.year=this.selectedYear;
this.fsrdata.permanent_faculty=this.fulltimeFaculty;
console.log("hello")
console.log(this.fsrdata);
this.dataService.sendData(this.fsrdata,this.urlval,this.selectedYear);

  }

  fulltime_faculty=new FormControl("",Validators.required);
}
