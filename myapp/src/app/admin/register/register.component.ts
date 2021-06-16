import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../account.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  constructor(private httpService:HttpClient , private Account:AccountService , public router:Router) { }
 
  register(form:NgForm){

    // let imgurl = `${form.value.imgUrl}`.slice(12);
    
    const sighup = {
      "id" : "",
      "name": form.value.name,
      "email" : form.value.username,
      "password" : form.value.password,
      "img": form.value.imgUrl,
      "typeUser": 0
    }
    
    this.Account.sighup(sighup).subscribe(p=>{
      console.log(p);
      alert('Thêm thành công thành viên!');
      this.router.navigate(['/admin/login'])
    },  error=>{
      alert(error.error.message);
     }
    
    // (error:Response)=>{
    //   if(error.status===404){
    //     alert('Không tìm thấy!');
    //   }else if(error.status ===400){
    //     alert('Tài khoản đã tồn tại');
    //   }else{
    //     alert('Thêm thành công thành viên!');
    //   }}
      )
      form.reset();
      
    
  }
  ngOnInit(): void {
  }
  back(){
    window.history.back();
  }


}
