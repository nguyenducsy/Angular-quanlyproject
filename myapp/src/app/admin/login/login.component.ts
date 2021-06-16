import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../account.service';
import { NgForm , FormControl , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { name_cam } from '../shared/name-cam';
import { name_saicuphap } from '../shared/name-cuphap';
import { name_rong } from '../shared/name-rong';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token:any = "";
  post:any;

  loginForm!: FormGroup; //reactiform
 //reactiform
  
  constructor(private httpService:HttpClient , private Account:AccountService , public router: Router) { }

  ngOnInit(): void {
    //validation 
    //required = cần thiết 
   this.loginForm = new FormGroup({
    'username' : new FormControl('',[name_cam , name_saicuphap , name_rong]),
     'pass': new FormControl()
   })

    //auto login
      if(this.Account.getToken()){
        console.log(this.Account.getToken());
          this.router.navigate(["/admin"])
      }
  }

  login(){
    // debugger;  use debug F9 
    const login = {
      "email" : this.loginForm?.value.username,
      "password" : this.loginForm?.value.pass
    }
    
    
    this.Account.sighin(login).subscribe(p=>{
      this.post = p
      console.log(p);
      
      // console.log(this.post.accessToken);
      this.token = this.post.accessToken;
  
      var profile = {
        name : `${this.post.profiles.name}`,
        img : `${this.post.profiles.img}`,
        typeUser : `${this.post.profiles.typeUser}`
      }

      this.Account.saveInfo(profile)
      this.Account.saveToken(this.token);//lưu token to storage
      alert('Đăng nhập thành công!');

      console.log(this.Account.getToken().typeUser);
          if(this.Account.getToken().typeUser ==0){
            this.router.navigate(['/admin/task'])
          }else{
            this.router.navigate(["/admin"])
          }
      // this.router.navigate(['/admin'])
    },  error=>{
         alert(error.error.message);
         }
    
      )
    
      this.loginForm?.reset();
      
    
  }
}
   // (error:Response)=>{
    //   if(error.status===404){
    //     alert('Không tìm thấy!');
    //   }else if(error.status ===400){
    //     alert('Tài khoản đã tồn tại');
    //   }else{
    //     alert('Thêm thành công thành viên!');
    //   }}