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
  'faculty_experience_8years':0,
  'faculty_experience_8_15years':0,
  'faculty_experience_more_15_years':0,
  'faculty_with_phd':0,
  "college":0
}
res:any
ngOnInit(): void {
  
  this.res=this.dataService.userLoggedIn();
  this.dataService.getPostOrPut(this.urlval,this.selectedYear);

  
}
update(e:any){
  // console.log(this.res)
   this.phdvalue.college=this.dataService.userData.id
  // console.log(this.fsrdata)
  // console.log(this.fsrdata.college)
  this.selectedYear = <number>e.target.value
  this.dataService.getPostOrPut(this.urlval,this.selectedYear);
  this.res=this.dataService.userLoggedIn();
  console.log(this.dataService.userData);



}

//url value
urlval="http://127.0.0.1:8000/api/fges/"


  setPhd(){
    this.res=this.dataService.userLoggedIn();
console.log("hello")
console.log(this.phdval);
this.phdvalue.year=this.selectedYear;
this.phdvalue.faculty_with_phd=this.totalphd;
this.phdvalue.faculty_experience_8years=this.phdUptoEight;
this.phdvalue.faculty_experience_8_15years=this.phdEightToFifteen;
this.phdvalue.faculty_experience_more_15_years=this.phdAboveFifteeen;
//added year as primary key
this.phdvalue.college=this.dataService.userData.id;
console.log(this.phdvalue)


console.log(this.phdvalue);
this.dataService.sendData(this.phdvalue,this.urlval,this.selectedYear);




}


}
