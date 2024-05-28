import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CallserviceService } from '../services/callservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private callService : CallserviceService

  ) { }
  userDetail : any
updateForm = this.formBuilder.group({
  fristName : '',
  lastName : '',
  phone : '',
  age : '',
  roleId : '',
  userName : '',
  password : '',
  confirmPassword : ''
})
  ngOnInit() {
    var userDetailSession : any = sessionStorage.getItem("userDetail")
    this.userDetail = JSON.parse(userDetailSession)
  }

}
