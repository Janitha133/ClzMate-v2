import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-pswd',
  templateUrl: './forgot-pswd.component.html',
  styleUrls: ['./forgot-pswd.component.scss']
})
export class ForgotPswdComponent implements OnInit {

  form6;
  userEmail = 'send';
  saveEmail = 'example@gmail.com';

  constructor(private fb6: FormBuilder) {

    this.form6 = this.fb6.group({
      email: ['', [Validators.email,Validators.required]],
      resetCode: ['', Validators.required]
    })
   }

  ngOnInit() {
  }
  
  onSubmit(form6){
    console.log(form6.value);
    this.userEmail = 'sent';
    this.form6.reset();
  }

  get email(){return this.form6.get('email');}

  get resetCode(){return this.form6.get('resetCode');}
}
