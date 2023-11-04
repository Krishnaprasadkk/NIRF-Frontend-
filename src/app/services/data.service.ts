import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class dataservice{
  constructor(private http : HttpClient){

  }

  sendData(objectTosend:any,url:string){

    return this.http.post(url,objectTosend).subscribe(Response=>{
      console.log("object sent successfully")
    })

  }

  registerCollege(collegeData:any){
    return this.http.post(" register college url ",collegeData).subscribe(Response=>{
      console.log("object sent successfully")
    })
  }

  validateCollegeCredentials():boolean{

    return true;
  }


}
