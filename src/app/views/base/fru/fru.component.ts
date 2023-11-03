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
  "capitalExp":0,
  "operationalExp":0
}

//url
urlval=" "
  getFru(){
this.financeData.year=this.selectedYear;
this.financeData.capitalExp=this.capitalExp;
this.financeData.operationalExp=this.operationalExp;
console.log(this.financeData);

this.dataService.sendData(this.financeData,this.urlval);

  }

}
