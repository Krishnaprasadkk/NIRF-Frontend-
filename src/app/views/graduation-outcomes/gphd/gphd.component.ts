import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gphd',
  templateUrl: './gphd.component.html',
  styleUrls: ['./gphd.component.scss']
})
export class GphdComponent {

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

  students_graduated!:number;
  students_graduated_valid=new FormControl("",Validators.required)
  getGPhd(){

  }


}
