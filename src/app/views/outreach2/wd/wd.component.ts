import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import value from '../../../../declarations';
import { dataservice } from '../../../services/data.service';

@Component({
  selector: 'app-wd',
  templateUrl: './wd.component.html',
  styleUrls: ['./wd.component.scss'],
  providers:[dataservice,HttpClient]
})
export class WdComponent {
  getCurrentYear(){
    return new Date().getFullYear();
  }
constructor(private dataService :dataservice)
{
  this.selectedYear=this.years[0];



}


  currYear=this.getCurrentYear();
  curr:number=this.currYear;
  // years:number[]=[this.currYear,this.currYear-1,this.currYear-2,this.currYear-3,this.currYear-4,this.currYear-5];
  years:any=["select the year ",this.currYear,this.currYear-1,this.currYear-2,this.currYear-3,this.currYear-4,this.currYear-5];

  selectedYear!:number;


  update(e:any){
    this.selectedYear = e.target.value
    this.selectedYear = e.target.value;
    this.womenDiversity.college=this.dataService.userData.id
    // console.log(this.fsrdata)
    // console.log(this.fsrdata.college)
    this.selectedYear = <number>e.target.value;
    this.dataService.getPostOrPut3(this.urlget,this.selectedYear)
    // this.dataService.getPostOrPut2(this.urlget,this.selectedYear,this.dataService.collegeId);
    this.res=this.dataService.userLoggedIn();
    console.log(this.dataService.userData);
  }


totalWomenStudents!:number;
totalWomenFaculty!:number;



womenDiversity:any={
"year":1,
"womenStudents":0,
"womenFaculty":0,
"college":0,
}

res:any
urlget="http://127.0.0.1:8000/api/wdget/"
ngOnInit(): void {
  
  this.res=this.dataService.userLoggedIn();
  this.womenDiversity.college=this.dataService.userData.id;
  // this.dataService.getPostOrPut(this.urlval,this.selectedYear);
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear);

  
}
@ViewChild('wd')  women_d!:NgForm;

women__students =new FormControl("",Validators.required);
women__faculty =new FormControl("",Validators.required);

urlval="http://127.0.0.1:8000/api/wds/"


getWD(){
  this.res=this.dataService.userLoggedIn();
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear);
    this.womenDiversity.college=this.dataService.userData.id;
// console.log(this.womenData);
console.log(this.women_d);
this.womenDiversity.womenStudents =this.women_d.value['women_students'],
this.womenDiversity.womenFaculty=this.women_d.value['women_faculty'],
this.womenDiversity.year=<number>this.selectedYear;
console.log(this.womenDiversity.womenStudents)
console.log(this.womenDiversity)
this.dataService.sendData2(this.womenDiversity,this.urlval,this.selectedYear,this.urlget);

  }



}
