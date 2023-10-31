import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-gue',
  templateUrl: './gue.component.html',
  styleUrls: ['./gue.component.scss'],
  providers:[dataservice,HttpClient]
})
export class GueComponent {

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

  students_passed!:number;
  graduated=new FormControl("",Validators.required)

  guedata:any={
    "year":0,
    "students_passed":0
  }

  @ViewChild('passed') passedobj!:NgForm;


  // url
urlval="url"

  getGue(){

this.guedata.year=this.selectedYear;
this.guedata.students_passed=this.passedobj.value['passedval']
console.log(this.passedobj.value['passedval'])
console.log(this.passedobj)
console.log(this.guedata)

this.dataService.sendData(this.guedata,this.urlval);


  }



}
