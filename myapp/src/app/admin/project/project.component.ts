import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CRUDprjService } from 'src/app/crudprj.service';
import { NgForm , FormControl , FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  
  // url = "http://localhost:3000/project/";
  // formAdd:FormGroup | undefined;
  
  posts:any;
  error = "";
  post:any;// take date getID to from (giữ)

  constructor(private httpService:HttpClient , private CRUDproject : CRUDprjService) { }

  isFetching:boolean | undefined;
  isAccess:boolean | undefined;

  ngOnInit(): void {

    // this.formAdd = new FormGroup({
    //   'name': new FormControl( Validators.required , Validators.maxLength(10)),
    // })
    this.getAllProject();
  }
  // name:any
  Submit(){
  //   this.name =  this.formAdd?.value.name
  }
  getAllProject(){
    this.isFetching = true;
    this.isAccess =  true;
    this.CRUDproject.get_AllProject().subscribe(p => {
      this.isFetching = false;
      this.isAccess =  false;
      this.posts = p
      console.log(this.posts);
    })
  }
  profile:any = JSON.parse(`${localStorage.getItem("InfoClient")}`);


  item = {
    "id": 0,
    "name" : "",
    "idtask": '',
    "iduser": this.profile.typeUser,
    "teamsize": '',
    "date" :  '',
  };
  project = {
    "id": '',
    "name" : "",
    "idtask": '',
    "iduser": this.profile.typeUser,
    "teamsize": '',
    "date" :  '',
  };
  addpro(){
    console.log(this.project);
    
    this.storeAdd(this.project)
    this.clearForm();
    }
  
  storeAdd(project:any){
    this.CRUDproject.addPro(project).subscribe(p => {
      console.log(p);
      
      this.getAllProject();
    })
  }
  dele(id: any){
    this.CRUDproject.del(id).subscribe(p =>{
      this.getAllProject()  
    }),(error:Response)=>{
      if(error.status===404){
        alert('Khong tim thay!');
      }else{
        alert('Loi gi chua biet');
      }}
  }

  getPro(id:number){
      this.CRUDproject.oncePro(id).subscribe(p => {
      this.post = p
      this.item = this.post // push lên form 
      // console.log(this.item);
    })
     this.item.id = id // id đã được get về
  }

  edit( ){
     let id = this.item.id ;
    //  console.log(this.item);
    this.CRUDproject.editPro(id , this.item).subscribe(p => {
      // console.log(p);
      this.getAllProject();
    })
  }
  clearForm(){
    this.project.name = "" ;
    this.project.date = "";
    this.project.teamsize = "";
    this.post.name = ""
    this.post.date = "";
    this.post.teamsize = 0;
  }
}
