import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner"
  acno=""
  pwd=""
 
  routerLogin: any;
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  pwdChange(event:any){
   this.pwd=event.target.value
    console.log(this.pwd);
    
  }
  acnoChange(event:any){
    this.acno=event.target.value
  console.log(this.acno);
  
  }
  login(){
      var acno=this.acno
      var pwd=this.pwd
       let result=this.ds.login(acno,pwd)
       if(result){
         
            alert("login success")
            this.router.navigateByUrl('home')
          }
         
        }
}
//  login(a:any,p:any){
//    console.log(a);
   
//     var acno=a.value
//     var pwd=p.value
//      let db=this.data
//      if(acno in db){
//         if(pwd == db [acno]["password"]){
//           alert("login success")
//         }
//         else{
//           alert("incorrect")
//         }
        
//      }
//      else{
//        alert("invalid")
//      }
//     alert("login successfully")
//    }
// }
//   
