import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { dataservice } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[dataservice,HttpClient]
})
export class RegisterComponent {

  constructor(private dataService:dataservice,public router:Router) { }

  @ViewChild('register') registerCollege!:NgForm;

collegename=""
password=""
confirm_pass=""
email=""

registerCollegeData:any={
  "collegename":"",
  "password":"",
  "confirm_pass":"",
  "email":"",


}

  RegisterAccount(){
console.log(this.registerCollege);

this.registerCollegeData.email=this.registerCollege.value['college_email']
this.registerCollegeData.collegename=this.registerCollege.value['college_name']
this.registerCollegeData.password=this.registerCollege.value['password']
this.registerCollegeData.confirm_pass=this.registerCollege.value['confirm_password']

console.log(this.registerCollegeData);

this.dataService.registerCollege(this.registerCollegeData);
this.router.navigate(['/login']);




  }

}
