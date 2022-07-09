import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CarGuard implements CanActivate {
  constructor(private _logInService:LoginService, private _router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(sessionStorage.getItem('email')!=null){
      return true;
    }
    // if(this._logInService.isLoggedIn)
    //   return true;
    else
      this._router.navigate(['login']);
      //return false;
  }
}
