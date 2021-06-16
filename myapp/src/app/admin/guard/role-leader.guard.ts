import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleLeaderGuard implements CanActivate {
  constructor(private _route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let profile:any = JSON.parse(`${localStorage.getItem("InfoClient")}`)
      let typeUser:any = profile.typeUser
      console.log(typeUser);
      if(typeUser==1){
        return true;
      }else {
        this._route.navigate(['/admin/task'])
        };
      
    return true;
  }
  
}
