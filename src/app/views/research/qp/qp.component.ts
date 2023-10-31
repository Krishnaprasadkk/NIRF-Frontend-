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
  years:number[]=[this.currYear,this.currYear-1,this.currYear-2,this.currYear-3,this.currYear-4,this.currYear-5];

  selectedYear!:number;


  update(e:any){
    this.selectedYear = e.target.value
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


}

//url value
urlval="url"
  getqp()
  {

    this.qpdata.year=this.selectedYear;
    this.qpdata.total_citation_Count=this.qpval.value['total_citation'],
    this.qpdata.top_25_percent =this.qpval.value['top_25_citation']
    console.log(this.qpdata)

    this.dataService.sendData(this.qpdata,this.urlval)



  }
}
