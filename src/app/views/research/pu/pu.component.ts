import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-pu',
  templateUrl: './pu.component.html',
  styleUrls: ['./pu.component.scss'],
  providers:[dataservice,HttpClient]
})
export class PuComponent {
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

number_of_publications!:number;
number_publications=new FormControl("",Validators.required)

puvalue:any={
  "pu":0,
  "year":0,
  "college":0
}
res:any
ngOnInit(): void {
  this.res=this.dataService.userLoggedIn();
    this.puvalue.college=this.dataService.userData.id;
  this.res=this.dataService.userLoggedIn();
  this.dataService.getPostOrPut(this.urlval,this.selectedYear);

  
}
//url value
urlval="http://127.0.0.1:8000/api/pus/"

@ViewChild('pu') public puval!:NgForm;
getpu(){
  this.res=this.dataService.userLoggedIn();
  this.puvalue.college=this.dataService.userData.id;
console.log(this.puval);
this.puvalue.pu=this.puval.value['no_publications']
this.puvalue.year=<number>this.selectedYear
console.log(this.puvalue)
this.dataService.sendData(this.puvalue,this.urlval,this.selectedYear);


}
}
