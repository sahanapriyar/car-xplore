import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http:HttpClient) { }

  getCarBrands(){
    return this._http.get('https://raw.githubusercontent.com/Harsh-gitx/CarAPI/master/getCars');
    console.log('Inside home service');
  }

  getSelectedBrand(url){
    return this._http.get(url);

  }
}
