import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable()
export class dataservice{
  isValidCredential:boolean=false;


  message:string=""
  constructor(private http : HttpClient)
  {
        
  }

  userData:any={
    'id':0,
    'collegename':String,
    'email':String
    
    

  }
  collegeId=this.userData.id;

  userLoggedIn(){
    return this.http.get("http://127.0.0.1:8000/api/user/",{withCredentials:true}).
    subscribe((resp)=>{
      this.userData=resp
      console.log(resp)
      this.userData.id=resp['id']
      this.userData.collegename=resp['collegename'],
      this.userData.email=resp['email']
      console.log(this.userData.id)
      console.log(this.userData.collegename)
      console.log(this.userData.email)
      
      // console.log(resp.valueOf)
    }
    
    
    )
    
  }

ifPost:boolean
  getPostOrPut(url:string,year:number){

    this.http.get(url+year+"/").subscribe((res)=>{
      this.ifPost=false;
      console.log(res)
      console.log(this.ifPost)
    },
    err=>{
      this.ifPost=true;
    console.error(err);
    console.log(this.ifPost);
    
    })
  }
  sendData(objectTosend:any,url:string,selectedYear:number){

    if(this.ifPost){
      return this.http.post(url,objectTosend).subscribe(Response=>{
        console.log("object sent successfully --post")
        this.ifPost=false
      },
      )
        
      
    }
    else{
      return this.http.put(url+selectedYear+"/",objectTosend).subscribe(Response=>{
       console.log("put data sent successfully ") 
      },
      err =>{
        console.log("data not sent == put")
      })
    }
    

  }

  registerCollege(collegeData:any){
    return this.http.post("http://127.0.0.1:8000/api/register/",collegeData).subscribe(Response=>{
      console.log(Response)
    })
  }

  
  validateCollegeCredentials(collegeDataCredentials:any){

    return this.http.post("http://127.0.0.1:8000/api/login/",collegeDataCredentials,{
      withCredentials:true
    }).subscribe(Response=>{
      console.log(Response)

      this.isValidCredential=true;
      

    },
    err=>{
this.message="Invalid Login Credentials",
this.isValidCredential=false

    })
  }

  getAllCollegeList(){


  }


}
