import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardetailsService {

  constructor(private _http:HttpClient) { }

getCarDetails(url){
  let observableData=this._http.get(url);
  //observableData.pipe(map(data=>console.log(data)));
  return observableData.pipe(map(data=>data['upCommingCars']));

}


}
