import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbordAdmin',
  templateUrl: './dashbordAdmin.component.html',
  styleUrls: ['./dashbordAdmin.component.css']
})
export class DashbordAdminComponent implements OnInit {

  constructor() { }


  userDatil : any 
  userData : any
  ngOnInit() {
   
    this.userDatil = sessionStorage.getItem("userDetail");
     this.userData = JSON.parse(this.userDatil)
    console.log(this.userData)
  }

}
