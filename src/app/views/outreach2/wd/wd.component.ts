import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import value from '../../../../declarations';

@Component({
  selector: 'app-wd',
  templateUrl: './wd.component.html',
  styleUrls: ['./wd.component.scss']
})
export class WdComponent {
  getCurrentYear(){
    return new Date().getFullYear();
  }
constructor()
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


totalWomenStudents:number=0;
totalWomenFaculty:number=0;



 womenDiversity!:{
"total_WomenStudents":0,
"totalWomenFaculty":0
 }
@ViewChild('wd') public  women_d!:NgForm;
womenData!:FormGroup;
ngOnInit(): void {
  // this.womenData=new FormGroup(
  //   {
  //     'women_students': new FormControl("",Validators.required),
  //     'women_faculty' : new FormControl("",Validators.required)
  //   }

  // )
}
women_students =new FormControl("",Validators.required);

  getWD(){
console.log(this.womenData);
console.log(this.women_d);

  }



}
