import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor() { }
  profile:any 
  img = ""
  name = ""

  ngOnInit(): void {
    this.profile = JSON.parse(`${localStorage.getItem("InfoClient")}`)
    if(this.profile != ""){
      this.img = this.profile.img
      this.name = this.profile.name

    }
  }

  logout(){
    localStorage.clear()
  }
}
