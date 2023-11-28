import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-escs',
  templateUrl: './escs.component.html',
  styleUrls: ['./escs.component.scss'],
  providers:[dataservice,HttpClient]
})
export class EscsComponent {

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


  update(e:any){
    this.selectedYear = e.target.value;
    this.feesdata.college=this.dataService.userData.id
    // console.log(this.fsrdata)
    // console.log(this.fsrdata.college)
    this.selectedYear = <number>e.target.value;
    this.dataService.getPostOrPut3(this.urlget,this.selectedYear)
    // this.dataService.getPostOrPut2(this.urlget,this.selectedYear,this.dataService.collegeId);
    this.res=this.dataService.userLoggedIn();
    console.log(this.dataService.userData);
  }


  @ViewChild('escs') public escsval!:NgForm;

  students_full_fees!:number;

fees=new FormControl("",Validators.required);
feesdata:any={
  "year":0,
  "total_students":0,
  "college":0,
}
res:any
urlget="http://127.0.0.1:8000/api/escsget/"
ngOnInit(): void {
  
  this.res=this.dataService.userLoggedIn();
  this.feesdata.college=this.dataService.userData.id;
  // this.dataService.getPostOrPut(this.urlval,this.selectedYear);
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear);

  
}
//url;
urlval="http://127.0.0.1:8000/api/escss/"

getEscs(){
  this.res=this.dataService.userLoggedIn();
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear);
    this.feesdata.college=this.dataService.userData.id;
console.log(this.escsval);
this.feesdata.total_students= this.escsval.value['students_full_fees']
this.feesdata.year=this.selectedYear;
console.log(this.feesdata)
this.dataService.sendData2(this.feesdata,this.urlval,this.selectedYear,this.urlget);


}


}
