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
  saveEmail = '';
  verificationCode
  verified = false

  constructor( 
    private Users: UserService,
    private fb6: FormBuilder
    ) {
    this.form6 = this.fb6.group({
      email: ['', [Validators.email]],
      resetCode: ['']
    })
   }

  ngOnInit() {
  }
   
  onSubmit(form6){
    console.log(form6.value);
    if(this.form6.value.resetCode && this.form6.value.email == null){
      this.verifyEmail()
      if(this.verified == true){
        this.Users.saveNewPassword(this.saveEmail)
          .subscribe(result => {
            console.log(result.json().newPassword)
            if(result.json().state){
              alert("New Password Sent to "+this.saveEmail+". You can login now.")
            } else{
              alert("Error occured. Please try again");
            }
          })
        this.userEmail = 'done'; 
      } else{
        this.userEmail = 'send'; 
      }
    }if(form6.value.email){
      this.saveEmail = form6.value.email
      this.Users.resetPassword(form6.value.email)
      .subscribe(result => {
        if(result.json().state){
          this.verificationCode = result.json().code
          console.log(this.verificationCode);
        }   
        else alert("Error occured. Please re enter your email again");
      })
    this.userEmail = 'sent';
    this.form6.reset();
    }  
  }

  verifyEmail(){
    if(this.verificationCode == this.form6.value.resetCode){
      this.verified = true   
      console.log("verified")
      return this.verified
    } else {
      this.verified = false
      console.log("not verified")
      return this.verified
    }
  }

  get email(){return this.form6.get('email');}

  get resetCode(){return this.form6.get('resetCode');}
}
