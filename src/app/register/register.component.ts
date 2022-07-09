import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  username : string;
  mobilenum : string;
  mail : string;
  pswd : string;
  cpswd : string;
  gender : string;

  constructor(private _router:Router) { }

  formSubmit(){
    alert();
    console.log(this.username);
    console.log(this.mobilenum);
    console.log(this.mail);
    console.log(this.pswd);
    const user={
      name:this.username,
      mobilenum:this.mobilenum,
      mail:this.mail,
      password:this.pswd,
      gender:this.gender
    }
    localStorage.setItem(this.mail,JSON.stringify(user));
    this._router.navigate(['/login']);
  }

  navigateToLogin(){
    this._router.navigate(['login']);
  }


  ngOnInit() {
  }

}
