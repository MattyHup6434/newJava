import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CallserviceService } from '../services/callservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder,
    private callService : CallserviceService,
    private router: Router,
  ) { }

  ngOnInit() {
    sessionStorage.removeItem("userDetail");

    
    
  }
  
  loginForm = this.formBuilder.group({
    userName: '',
    password: '',
  });


  onSubmit(){


    const userName = this.loginForm.value.userName
    const password = this.loginForm.value.password

    this.callService.authen(userName, password).subscribe(res=>{
      console.log(res)
      if(res.data){

        Swal.fire({
          icon: 'success',
          title: 'สำเร็จ!',
          text: 'เข้าสู่ระบบสำเร็จจ้า',
          confirmButtonText: 'ตกลง',
        });
        const userData = JSON.stringify(res.data)
        sessionStorage.setItem('userDetail', userData)
        this.router.navigate(['/dashbord-admin']);
      }else{
        Swal.fire({
          icon: 'warning',
          title: 'เข้าสู่ระบบไม่สำเร็จ!',
          text: 'กรุณาตรวจสอบข้อมูลด้วยจ้า',
          confirmButtonText: 'ตกลง',
        });
      }
    })

  }
}
