import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName:string;
  carMakes=[];

  constructor(private _service:HomeService, private _router:Router) { }

  ngOnInit() {

    this.userName=sessionStorage.getItem('username');
    return this._service.getCarBrands().subscribe((data)=>{
      console.log(data['carMakes']);
      this.carMakes=data['carMakes'];
    });

  }

  logOut(){
    sessionStorage.clear();
    this._router.navigate(['login']);
    
  }

  selectBrand(brand){
    // alert(brand);
      // console.log(brand);
      // this._service.getSelectedBrand(brand.url).subscribe((data)=>{
      //   console.log(data);
      // }, ()=>{});

    this._router.navigate(['home/carDetails',{brand:JSON.stringify(brand)}]);
      

    }
  

}
