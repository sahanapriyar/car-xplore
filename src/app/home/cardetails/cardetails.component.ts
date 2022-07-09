import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardetailsService } from '../cardetails.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
upComingCars=[];
  constructor(private _route:ActivatedRoute,private _service: CardetailsService) { }

  getUpComingCars(){
    let brandDetails=this._route.snapshot.params;
    let brandObj=JSON.parse(brandDetails.brand);
    console.log(brandObj.name);

    this._service.getCarDetails(brandObj.url).subscribe((data)=>{
      console.log(data);
      //console.log(data['upcomingCars']);
      this.upComingCars=data;
    });

    
  }
  ngOnInit() {
   this._route.params.subscribe(data=>this.getUpComingCars());
  }

}
