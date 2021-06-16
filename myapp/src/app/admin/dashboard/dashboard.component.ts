import { Component, OnInit } from '@angular/core';
import decode from 'jwt-decode' //giải mã token
import { CRUDprjService } from 'src/app/crudprj.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   year = "";
   cutyear = new Array()
  constructor(private CRUDprj :CRUDprjService , private httpProject:HttpClient ) { }
  profile:any
  task:any
  users:any
  project:any
  totals:any


  ngOnInit(): void {

    this.profile = JSON.parse(`${localStorage.getItem("InfoClient")}`)
    let token:any = localStorage.getItem('TokenAcc');
    let user = decode(token) //giai ma
    // console.log(user);

    this.getAllprj()
    this.getAlltask()
    this.getAlluser()
  }
  getAllprj(){
    this.CRUDprj.get_AllProject().subscribe(p => {
      this.project = p
      this.totals = 0;

      for (let i = 0; i < this.project.length; i++) {
        this.totals += this.project[i].total      
      }

      console.log(this.project);
      
    })
  }
  getAlltask(){
    this.CRUDprj.get_AllTask().subscribe(p => {
      this.task = p

      for (let i = 0; i < this.task.length; i++) {
        this.year= `${this.task[i].deadline}`

        this.cutyear.push(this.year.slice(0,10))
      }
    

      console.log(this.cutyear);
      
    })
  }
  getAlluser(){
    this.CRUDprj.get_AllUser().subscribe(p => {
      this.users = p

      // console.log(this.users);
      
      
    })
  }


}
