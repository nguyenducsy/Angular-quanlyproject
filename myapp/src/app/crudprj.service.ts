import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountService } from './admin/account.service'; //xác thực thông qua token để được quyền truy xuất urlPro

@Injectable({
  providedIn: 'root'
})
export class CRUDprjService {

  urlPro = "http://localhost:3000/admin/project/";
  urlTask = "http://localhost:3000/admin/task/";
  urlUser = "http://localhost:3000/admin/user/";

  constructor(private httpService:HttpClient, private accService:AccountService) { }

  get_AllUser(){
    return this.httpService.get(this.urlUser);
  }

  get_AllTask(){
    return this.httpService.get(this.urlTask , {headers: new HttpHeaders().set('x-access-token', this.accService.getToken())} );
  }
  get_AllProject(){
    // console.log(this.accService.getToken());
    return this.httpService.get(this.urlPro , {headers: new HttpHeaders().set('x-access-token', this.accService.getToken())} );
    }
    addTask(task:any){
      return this.httpService.post(this.urlTask , task ,{headers: new HttpHeaders().set('x-access-token', this.accService.getToken())});
      
    }
    addPro(project:any){
      return this.httpService.post(this.urlPro , project ,{headers: new HttpHeaders().set('x-access-token', this.accService.getToken())});
      
    }
    del(id:any){
      return this.httpService.delete(this.urlPro+id);

    }
    deltask(id:any){
      return this.httpService.delete(this.urlTask+id);

    }
    oncePro(id:number){
      return  this.httpService.get(this.urlPro+id);

    }
    onceTask(id:number){
      return  this.httpService.get(this.urlTask+id);

    }
    editPro(id:number , item:any){
      
      return this.httpService.put(this.urlPro+id , item ,{headers: new HttpHeaders().set('x-access-token', this.accService.getToken())} )
    }
    editTask(id:number , item:any){
      
      return this.httpService.put(this.urlTask+id , item ,{headers: new HttpHeaders().set('x-access-token', this.accService.getToken())} )
    }
    deletePost(id:number){
    return this.httpService.delete(this.urlPro+id);
    }
}
