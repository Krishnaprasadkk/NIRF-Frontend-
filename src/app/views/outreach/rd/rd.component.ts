import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-rd',
  templateUrl: './rd.component.html',
  styleUrls: ['./rd.component.scss']
})
export class RDComponent {

  @ViewChild('rd') reigonaldiversity=RDComponent;

  studentsFromOthStates!:number;
  studentsFromOthCntry!:number;
oth_states=new FormControl("",Validators.required);
oth_countries=new FormControl("",Validators.required);



  getRD(){

}
}
