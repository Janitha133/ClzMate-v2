import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-forgot-pswd',
  templateUrl: './forgot-pswd.component.html',
  styleUrls: ['./forgot-pswd.component.scss'],
  providers: [ UserService ]
})
export class ForgotPswdComponent implements OnInit {

  form6;
  userEmail = 'send';
  saveEmail = 'example@gmail.com';
  verificationCode

  constructor(
    private Users: UserService,
    private fb6: FormBuilder
    ) {
    this.form6 = this.fb6.group({
      email: ['', [Validators.email,Validators.required]],
      resetCode: ['', Validators.required]
    })
   }

  ngOnInit() {
  }
   
  onSubmit(form6){
    console.log(form6.value);
    this.Users.resetPassword(form6.email)
      .subscribe(result => {
        if(result.json().state){
          this.verificationCode = result.json().code
          console.log(this.verificationCode);
        } 
        else alert("Error occured please re enter your email again");
      })
    this.userEmail = 'sent';
    this.form6.reset();
  }

  get email(){return this.form6.get('email');}

  get resetCode(){return this.form6.get('resetCode');}
}
