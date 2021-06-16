import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = "http://localhost:3000/auth/"

  constructor(private httpService:HttpClient , public router:Router ) { }


  sighup(sighup:any){
    return this.httpService.post(this.url + 'register' , sighup);
  }
  sighin(login:any){

    return this.httpService.post(this.url + 'login' , login);

  }
  public saveToken(token:any ){
      window.localStorage.removeItem("TokenAcc");
      window.localStorage.setItem("TokenAcc" , token);
      this.router.navigate(['/admin'])
  }
  public saveInfo(profile:object ){
    window.localStorage.removeItem("InfoClient");
    window.localStorage.setItem("InfoClient" , JSON.stringify(profile));
    this.router.navigate(['/admin'])
}
  public getToken():any{
   return  window.localStorage.getItem("TokenAcc");
  }

}
