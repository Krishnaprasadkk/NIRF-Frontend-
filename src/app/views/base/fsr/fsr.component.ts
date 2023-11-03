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
export class FsrComponent {
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
fulltimeFaculty!:number;


@ViewChild('fsr') fsrvalue!:NgForm;
fsrdata:any={
'year':0,
'fulltimeFaculty':0
}

urlval=" "
  getFaculty(){
console.log(this.fsrvalue);
this.fsrdata.year=this.selectedYear;
this.fsrdata.fulltimeFaculty=this.fulltimeFaculty;
console.log(this.fsrdata);
this.dataService.sendData(this.fsrdata,this.urlval);

  }

  fulltime_faculty=new FormControl("",Validators.required);
}
