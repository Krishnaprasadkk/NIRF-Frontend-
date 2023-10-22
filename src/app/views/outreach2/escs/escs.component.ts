import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-escs',
  templateUrl: './escs.component.html',
  styleUrls: ['./escs.component.scss']
})
export class EscsComponent {

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


  @ViewChild('escs') public escsval!:NgForm;

  studentsFromOthStates!:number;
  studentsFromOthCntry!:number;
ug_Students=new FormControl("",Validators.required);
pg_students=new FormControl("",Validators.required);

getEscs(){
console.log(this.escsval);

}


}
