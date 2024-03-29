import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-gphd',
  templateUrl: './gphd.component.html',
  styleUrls: ['./gphd.component.scss'],
  providers:[dataservice,HttpClient]
})
export class GphdComponent {

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
  years:any=["select the year",this.currYear,this.currYear-1,this.currYear-2,this.currYear-3,this.currYear-4,this.currYear-5];

  selectedYear!:number;

urlget="http://127.0.0.1:8000/api/gphdget/"
  update(e:any){
    this.selectedYear = e.target.value;
    this.grad.college=this.dataService.userData.id
    // console.log(this.fsrdata)
    // console.log(this.fsrdata.college)
    this.selectedYear = <number>e.target.value;
    this.dataService.getPostOrPut3(this.urlget,this.selectedYear)
    // this.dataService.getPostOrPut2(this.urlget,this.selectedYear,this.dataService.collegeId);
    this.res=this.dataService.userLoggedIn();
    console.log(this.dataService.userData);;
  }

  students_graduated!:number;
  students_graduated_valid=new FormControl("",Validators.required)

  @ViewChild('graduated') gphd!:NgForm;

grad:any={
  "year":0,
  "students_graduated":0,
  "college":0,
}

//url
urlval="http://127.0.0.1:8000/api/gphds/"

res:any
ngOnInit(): void {
  
  this.res=this.dataService.userLoggedIn();
  this.dataService.getPostOrPut3(this.urlval,this.selectedYear);

  
}

  getGPhd(){
this.grad.year=this.selectedYear;
this.res=this.dataService.userLoggedIn();
this.dataService.getPostOrPut3(this.urlval,this.selectedYear);

this.grad.college=this.dataService.userData.id
this.grad.students_graduated=this.gphd.value['graduated'];

console.log(this.grad)

this.dataService.sendData2(this.grad,this.urlval,this.selectedYear,this.urlget);


  }


}
