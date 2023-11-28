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

respective_id:number=1;
ifPost:boolean
  getPostOrPut(url:string,year:number){

    this.http.get(url+year+"/").subscribe((res)=>{
      this.ifPost=false;
      this.respective_id=res['id'];
      console.log(res)
      console.log(this.ifPost)
    },
    err=>{
      this.ifPost=true;
    console.error(err);
    console.log(this.ifPost);
    
    })
  }

  getPostOrPut2(url:string,year:number,collegeId:number){
      console.log(collegeId)
    this.http.get(url+year+"-"+this.userData.id+"/").subscribe((res)=>{
      this.ifPost=false;
      this.respective_id=res['id'];
      console.log(res)
      console.warn(this.respective_id)
      console.log(res)
      console.log(this.respective_id+"no error detected")
      console.log(this.ifPost)
    },
    err=>{
      this.ifPost=true;
    console.error(err);
    console.warn(err);
    console.log(err)
    console.log(this.respective_id);
    console.log(this.ifPost);
    
    })
  }


  getPostOrPut3(url:string,year:number){
    
  this.http.get(url+year+"-"+this.userData.id+"/").subscribe((res)=>{
    this.ifPost=false;
    this.respective_id=res['id'];
    console.log(res)
    console.warn(this.respective_id)
    console.log(res)
    console.log(this.respective_id+"no error detected")
    console.log(this.ifPost)
  },
  err=>{
    this.ifPost=true;
  console.error(err);
  console.warn(err);
  console.log(err)
  console.log(this.respective_id);
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
      return this.http.put(url+this.respective_id+"/",objectTosend).subscribe(Response=>{
       console.log("put data sent successfully ") 
      },
      err =>{
        console.log("data not sent == put")
      })
    }
    

  }


  sendData2(objectTosend:any,url:string,selectedYear:number,urlget:string){

    if(this.ifPost){
      return this.http.post(url,objectTosend).subscribe(Response=>{
        console.log("object sent successfully --post")
        this.ifPost=false
        this.getPostOrPut3(urlget,selectedYear)
      },
      )
      

      
    }
    else{
      console.log(url+this.respective_id+"/"+" put sent ")
      return this.http.put(url+this.respective_id+"/",objectTosend).subscribe(Response=>{
       console.log("put data sent successfully ") 
      },
      err =>{
        console.log(url+this.respective_id+"/")
        console.log("data not sent == put")
        this.getPostOrPut3(urlget,selectedYear)
      })
    }
    this.getPostOrPut3(urlget,selectedYear)

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
