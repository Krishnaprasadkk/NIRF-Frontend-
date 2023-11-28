import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';
// import value from '../../../../declarations';

@Component({
  selector: 'app-ipr',
  templateUrl: './ipr.component.html',
  styleUrls: ['./ipr.component.scss'],
  providers:[dataservice,HttpClient]
})
export class IprComponent {

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

no_patents_granted!:number;
no_patents_published!:number;

patents_granted=new FormControl("",Validators.required);
patents_published=new FormControl("",Validators.required);

  update(e:any){
    this.selectedYear = e.target.value;
    this.patentval.college=this.dataService.userData.id
    // console.log(this.fsrdata)
    // console.log(this.fsrdata.college)
    this.selectedYear = <number>e.target.value;
    this.dataService.getPostOrPut3(this.urlget,this.selectedYear)
    // this.dataService.getPostOrPut2(this.urlget,this.selectedYear,this.dataService.collegeId);
    this.res=this.dataService.userLoggedIn();
    console.log(this.dataService.userData);
  }

@ViewChild('ipr')  patents!:NgForm;

  patentval:any={
    "year":this.selectedYear,
    "patents_granted":0,
    "patents_published":0,
    "college":0,
  }
  res:any
  urlget="http://127.0.0.1:8000/api/iprget/"
  ngOnInit(): void {
    
    this.res=this.dataService.userLoggedIn();
    // this.dataService.getPostOrPut(this.urlval,this.selectedYear);
    this.dataService.getPostOrPut3(this.urlget,this.selectedYear);
  
    
  }

  urlval="http://127.0.0.1:8000/api/iprs/"
  getIpr(){
console.log(this.patents);
this.res=this.dataService.userLoggedIn();
this.dataService.getPostOrPut3(this.urlget,this.selectedYear);
    this.patentval.college=this.dataService.userData.id;
this.patentval.patents_granted=this.patents.value['no_publications_granted'];
this.patentval.patents_published=this.patents.value['no_publications_published']
this.patentval.year=<number>this.selectedYear
console.log(this.patentval)
return this.dataService.sendData2(this.patentval,this.urlval,this.selectedYear,this.urlget);



  }

}
