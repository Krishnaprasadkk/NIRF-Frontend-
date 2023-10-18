import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fsr',
  templateUrl: './fsr.component.html',
  styleUrls: ['./fsr.component.scss']
})
export class FsrComponent {
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
fulltimeFaculty!:number;

  getFaculty(){

  }

  fulltime_faculty=new FormControl("",Validators.required);
}
