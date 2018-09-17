import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form;
  invalidLogin = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { 
    this.form = this.fb.group({
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  onSubmit(form){
    this.auth.login(form.value).subscribe(result => {
      let token = result.json().JWT_Token; 
      console.log(token);
      if(token){
        localStorage.setItem('token', token);
        this.router.navigate(['admin']);
      }else{
        this.invalidLogin = true;
        this.form.reset();
      }
    });
  }

  get email(){return this.form.get('email');}
  get password(){return this.form.get('password');}

 
  
}
