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
  years:number[]=[this.currYear,this.currYear-1,this.currYear-2,this.currYear-3,this.currYear-4,this.currYear-5];

  selectedYear!:number;

no_patents_granted!:number;
no_patents_published!:number;

patents_granted=new FormControl("",Validators.required);
patents_published=new FormControl("",Validators.required);

  update(e:any){
    this.selectedYear = e.target.value
  }

@ViewChild('ipr')  patents!:NgForm;

  patentval:any={
    "year":this.selectedYear,
    "patents_granted":0,
    "patents_published":0
  }


  urlval="dhiraj url"
  getIpr(){
console.log(this.patents);
this.patentval.patents_granted=this.patents.value['no_publications_granted'];
this.patentval.patents_published=this.patents.value['no_publications_published']
this.patentval.year=<number>this.selectedYear
console.log(this.patentval)
return this.dataService.sendData(this.patentval,this.urlval);



  }

}
