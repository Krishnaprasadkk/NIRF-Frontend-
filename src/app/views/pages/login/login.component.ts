import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dataservice } from 'src/app/services/data.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[dataservice,HttpClient]
})
export class LoginComponent {

  constructor(private dataService:dataservice,private router:Router)
 { }

isValid=false;
buttonPressed=false;

 @ViewChild('login') loginval!:NgForm;

password_control=new FormControl("",Validators.required);

password!:string
collegeName!:string

collegeData:any={
  "pass":"",
  "colName":""
}

loginfun(){
  this.buttonPressed=true
  this.isValid=this.dataService.validateCollegeCredentials()
  if (this.isValid) {
    this.router.navigate([DashboardComponent])
  } else {
  console.log("incorrect password")
  }
}


}
