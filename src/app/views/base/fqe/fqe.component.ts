import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators,FormsModule } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-fqe',
  templateUrl: './fqe.component.html',
  styleUrls: ['./fqe.component.scss'],
  providers:[dataservice,HttpClient]
})
export class FqeComponent {

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

  totalphd!:number;
  phdUptoEight!:number;
  phdEightToFifteen!:number;
  phdAboveFifteeen!:number;

phd_under8= new FormControl("",Validators.required)
phd_8to15= new FormControl("",Validators.required)
phd_above15= new FormControl("",Validators.required)
phd_total= new FormControl("",Validators.required)

@ViewChild('phd') phdval!:NgForm;
phdvalue:any={
  'year':0,
  'phdUptoEight':0,
  'phdEightToFifteen':0,
  'phdAboveFifteeen':0,
  'phd_total':0
}

//url value
urlval=" "

  setPhd(){
console.log("hello")
console.log(this.phdval);
this.phdvalue.year=this.selectedYear;
this.phdvalue.phd_total=this.totalphd;
this.phdvalue.phdUptoEight=this.phdUptoEight;
this.phdvalue.phdEightToFifteen=this.phdEightToFifteen;
this.phdvalue.phdAboveFifteeen=this.phdAboveFifteeen;
console.log(this.phdvalue);
this.dataService.sendData(this.phdvalue,this.urlval);




}


}
