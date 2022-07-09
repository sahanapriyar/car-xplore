import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username:string = '';
password : string= '';
errormsg : string;
  constructor(private _route:Router, private _loginService:LoginService) { }

  login()
    {
      console.log(this.username,this.password);
      let user=localStorage.getItem(this.username);
      if(user){

        let userObj=JSON.parse(user);
        console.log(userObj);
        if(this.password==userObj.password)
        {
          this._loginService.isLoggedIn=true;
          //sessionStorage.setItem("user",JSON.stringify(userObj));
          sessionStorage.setItem("email",this.username);
          sessionStorage.setItem("username",userObj.name);
          this._route.navigate(['home']);

        }else{
          alert('goobey password wrong');
          this.errormsg="email or password incorrect";
        }

      }else{
        alert('User not registerd');
      }


      // let userObj=JSON.parse(localStorage.getItem(this.username))
      // console.log(userObj);
      // if(this.password===userObj.password){
      //   this._route.navigate(['home']);
      
      // }
      // else{
      //   alert('username or password incorrect');
      // }

    }
  
  navigateToRegister(){
    this._route.navigate(['/register']);
  }
  ngOnInit() {
  }

}
