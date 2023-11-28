import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-qp',
  templateUrl: './qp.component.html',
  styleUrls: ['./qp.component.scss'],
  providers:[dataservice,HttpClient]
})
export class QpComponent {
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
    this.qpdata.college=this.dataService.userData.id
    // console.log(this.fsrdata)
    // console.log(this.fsrdata.college)
    this.selectedYear = <number>e.target.value;
    this.dataService.getPostOrPut3(this.urlget,this.selectedYear)
    // this.dataService.getPostOrPut2(this.urlget,this.selectedYear,this.dataService.collegeId);
    this.res=this.dataService.userLoggedIn();
    console.log(this.dataService.userData);
  }


  total_citation_Count!:number;
  number_cc=new FormControl("",Validators.required);

  top_25_percent!:number;

  top_25_cc =new FormControl("",Validators.required);

@ViewChild('qp') qpval!:NgForm;

qpdata:any={
  "year":0,
  "total_citation_Count":0,
  "top_25_percent":0,
  "college":0,


}
res:any
urlget= "http://127.0.0.1:8000/api/qpget/"
ngOnInit(): void {
  
  this.res=this.dataService.userLoggedIn();
  // this.dataService.getPostOrPut(this.urlval,this.selectedYear);
  this.dataService.getPostOrPut3(this.urlget,this.selectedYear);

  
}
//url value
urlval="http://127.0.0.1:8000/api/qps/"
  getqp()
  {
    this.res=this.dataService.userLoggedIn();
    this.dataService.getPostOrPut3(this.urlget,this.selectedYear);
    this.qpdata.college=this.dataService.userData.id;
    this.qpdata.year=this.selectedYear;
    this.qpdata.total_citation_Count=this.qpval.value['total_citation'],
    this.qpdata.top_25_percent =this.qpval.value['top_25_citation']
    console.log(this.qpdata)

    this.dataService.sendData2(this.qpdata,this.urlval,this.selectedYear,this.urlget)



  }
}
