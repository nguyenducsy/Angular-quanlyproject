import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CRUDprjService } from 'src/app/crudprj.service';
import { NgForm , FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

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
    this.getAllTask();
  }
  // name:any
  Submit(){
  //   this.name =  this.formAdd?.value.name
  }


  
  getAllTask(){
    this.isFetching = true;
    this.isAccess =  true;
    this.CRUDproject.get_AllTask().subscribe(p => {
      this.isFetching = false;
      this.isAccess =  false;
      this.posts = p
      console.log(this.posts);
    })
  }
  profile:any = JSON.parse(`${localStorage.getItem("InfoClient")}`);
   task = {
    "id": 0,
    "nameTask": "",
    "nameuser": `${this.profile.name}`,
    "idproject": 7,
    "description": "",
    "deadline": "",
    "iduser": this.profile.typeUser,
    "date": ""
  };
   

   
  item = {
    "id": 0,
    "nameTask": "",
    "nameuser": `${this.profile.name}`,
    "idproject": 7,
    "description": "",
    "deadline": "",
    "iduser": this.profile.typeUser,
    "date": ""
  };

  addtask(){
    this.storeAdd(this.task)
    }
  
  storeAdd(task:any){
    this.CRUDproject.addTask(task).subscribe(p => {
      console.log(p);
      
      this.getAllTask();
    })
  }
  dele(id: any){
    this.CRUDproject.deltask(id).subscribe(p =>{
      this.getAllTask()  
    }),(error:Response)=>{
      if(error.status===404){
        alert('Khong tim thay!');
      }else{
        alert('Loi gi chua biet');
      }}
  }

  getTask(id:number){
      this.CRUDproject.onceTask(id).subscribe(p => {
      this.post = p
      this.item = this.post // push lên form 
      
      // console.log(this.item);
    })
     this.item.id = id // id đã được get về
  }

  edit( ){
     let id = this.item.id ;
    //  console.log(this.item);
    this.CRUDproject.editTask(id , this.item).subscribe(p => {
      // console.log(p);
      this.getAllTask();
    })
  }
  clearForm(){
    this.task.nameTask = "" ;
    this.task.description = "";
    this.task.date = "";
    this.task.deadline = "";
    this.post.name = ""
    this.post.date = "";
    this.post.teamsize = 0;
    this.item={
      "id": 0,
      "nameTask": "",
      "nameuser": "",
      "idproject": 0,
      "description": "",
      "deadline": "",
      "iduser": 0,
      "date": ""
    }
  }

}
