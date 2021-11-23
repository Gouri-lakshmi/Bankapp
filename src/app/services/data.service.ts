import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any={
    1000:{acno:1000,uname:"ram",password:"gouri",balance:2000},
    1001:{acno:1001,uname:"raju",password:"raju123",balance:2000},
    1002:{acno:1002,uname:"ramu",password:"ramu123",balance:2000}
  }

  constructor() { }
  register(acno:any,pwd:any,uname:any){
    let database=this.data
    if(acno in database){
    return false
    }
    else{
      database[acno]={
        acno,
        uname,
        pwd,
        balance:0
      }
      return true
    }
  }

login(acno:any,pwd:any){
  let database = this.data
  if(acno in database){
    if(pwd == database [acno]["password"]){
      return true
      
    }
    else{
      alert("incorrect")
      return false
    }
    
 }
 else{
   alert("invalid")
 }
alert("login successfully")
return false
}
}


