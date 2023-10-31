import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
// import { RDComponent } from '../../Outreach2Module/rd1/rd.component';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { dataservice } from 'src/app/services/data.service';
// import value from '../../../../declarations';

@Component({
  selector: 'app-rd',
  templateUrl: './rd.component.html',
  styleUrls: ['./rd.component.scss'],
  providers:[dataservice,HttpClient]
})
export class RdComponent {


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


  @ViewChild('rd') reigonaldiversity!:NgForm;

  studentsFromOthStates!:number;
  studentsFromOthCntry!:number;
oth_states=new FormControl("",Validators.required);
oth_countries=new FormControl("",Validators.required);

rddata:any={
"year":0,
"studentsFromOthStates":0,
"studentsFromOthCntry":0
}

//url
urlval=""


  getRD(){
console.log(this.reigonaldiversity);
console.log(this.selectedYear);
this.rddata.year=this.selectedYear;
this.rddata.studentsFromOthStates=this.reigonaldiversity.value['studentsFromOthStates']
this.rddata.studentsFromOthCntry=this.reigonaldiversity.value['studentsFromOthcountry']
console.log(this.rddata)

this.dataService.sendData(this.rddata,this.urlval);


}
}
