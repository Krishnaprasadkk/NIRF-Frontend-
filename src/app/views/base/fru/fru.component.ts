import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-fru',
  templateUrl: './fru.component.html',
  styleUrls: ['./fru.component.scss'],
  providers:[dataservice,HttpClient]
})
export class FruComponent {

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

  capitalExp!:number;
  operationalExp!:number;

  capital_exp=new FormControl("",Validators.required)

operational_exp=new FormControl("",Validators.required)


@ViewChild('finance') fananceval!:NgForm;

financeData:any={
  "year":0,
  "total_revenue":0,
  "total_expenditure":0,
  "college":0
}
res:any
ngOnInit(): void {
  
  this.res=this.dataService.userLoggedIn();
  this.dataService.getPostOrPut(this.urlval,this.selectedYear);
  
}

//url
urlval="http://127.0.0.1:8000/api/frus/"
update(e:any){
  // console.log(this.res)
   this.financeData.college=this.dataService.userData.id
   console.log(this.dataService.userData.id);
  // console.log(this.fsrdata)
  // console.log(this.fsrdata.college)
  this.selectedYear = <number>e.target.value
  this.dataService.getPostOrPut(this.urlval,this.selectedYear);
  this.res=this.dataService.userLoggedIn();
  console.log(this.dataService.userData);



}


  getFru(){
    this.res=this.dataService.userLoggedIn();
    this.financeData.college=this.dataService.userData.id;
    console.log("hello")

this.financeData.year=this.selectedYear;
this.financeData.total_revenue=this.capitalExp;
this.financeData.total_expenditure=this.operationalExp;
console.log(this.financeData);

this.financeData.college=this.dataService.userData.id;
console.log(this.financeData)
this.dataService.sendData(this.financeData,this.urlval,this.selectedYear);

  }

}
