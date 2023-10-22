import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-qp',
  templateUrl: './qp.component.html',
  styleUrls: ['./qp.component.scss']
})
export class QpComponent {

  total_citation_Count!:number;
  number_cc=new FormControl("",Validators.required);

  top_25_percent!:number;

  top_25_cc =new FormControl("",Validators.required);
  getqp()
  {

  }
}
