import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  uname=""
  acno=""
  pwd=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.uname
    var acno=this.acno
    var pwd=this.pwd
   var result=this.ds.register(acno,uname,pwd)
   if(result ){
     alert("account created successfully")
     this.router.navigateByUrl('')
   }
   else{
     alert("account does not exists")
     this.router.navigateByUrl('')
   }
  }

}
