import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private _route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(localStorage.getItem("TokenAcc")){
        let token:any = localStorage.getItem('TokenAcc');
//check time token nếu còn thì được sử dụng
const jwtHelp = new JwtHelperService;
if(!jwtHelp.isTokenExpired(token)){
  console.log(jwtHelp.isTokenExpired(token));
  
  return true;

}
   
        
      }
      this._route.navigate(['/admin/login']) // not token
      return false;
    
  }

}

