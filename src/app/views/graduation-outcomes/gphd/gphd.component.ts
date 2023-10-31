import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-gphd',
  templateUrl: './gphd.component.html',
  styleUrls: ['./gphd.component.scss'],
  providers:[dataservice,HttpClient]
})
export class GphdComponent {

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

  students_graduated!:number;
  students_graduated_valid=new FormControl("",Validators.required)

  @ViewChild('graduated') gphd!:NgForm;

grad:any={
  "year":0,
  "students_graduated":0
}

//url
urlval="url"


  getGPhd(){
this.grad.year=this.selectedYear;
this.grad.students_graduated=this.gphd.value['graduated'];
console.log(this.grad)

this.dataService.sendData(this.grad,this.urlval);


  }


}
