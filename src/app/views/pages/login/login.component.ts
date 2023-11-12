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

email!:string
password!:string

// LoginMessage=this.dataService.message;

collegeData:any={
  "email":"",
  "password":""
}
LoginMessage!:string

loginfun(){
  console.log(this.collegeData)
  this.buttonPressed=true
  this.collegeData.email=this.loginval.value['email']
  this.collegeData.password=this.loginval.value['password']
this.isValid=this.dataService.isValidCredential
this.LoginMessage=this.dataService.message;
  this.dataService.validateCollegeCredentials(this.collegeData)
  if(this.isValid){
    this.router.navigate(['/dashboard'])
  }



}


}
