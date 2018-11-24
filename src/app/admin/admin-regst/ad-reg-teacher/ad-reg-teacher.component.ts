import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { resource } from 'selenium-webdriver/http';
import { UserService } from '../../../services/users.service';

@Component({
  selector: 'app-ad-reg-teacher',
  templateUrl: './ad-reg-teacher.component.html',
  styleUrls: ['./ad-reg-teacher.component.scss'],
  providers: [UserService, AuthService]
})
export class AdRegTeacherComponent implements OnInit {

  form2;

  constructor(
    private fb2: FormBuilder,
    private Users: UserService
  ) { 
    this.form2 = this.fb2.group({
      fullName: ['',  Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required], 
      birthday: ['', Validators.required],
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      nicNo: ['', Validators.required],
      mobileNumber: ['',Validators.required],
      landNumber: [''],
      firstLine: ['', Validators.required],
      secondLine: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required]
    })
  }
 
  ngOnInit() {
  }

  onSubmit(form2){
    form2.value['role'] = "teacher";
    form2.value['password'] = "password";
    console.log(form2.value);
    this.Users.register(form2.value)
      .subscribe(result => {
        if(result.json().state) alert("Teacher registered successfully");
        else if(result.json().exist) alert("Teacher already exist");
        else alert("Error occured please register teacher again");
        console.log(result);
      })
    this.form2.reset();
  }

  get email(){return this.form2.get('email');}

  get fullName(){return this.form2.get('fullName');}

  get nicNo(){return this.form2.get('nicNO');}

  get firstName(){return this.form2.get('firstName');}

  get lastName(){return this.form2.get('lastName');}

  get birthday(){return this.form2.get('birthday');}

  get mobileNumber(){return this.form2.get('mobileNumber');}

  get firstLine(){return this.form2.get('firstLine');}

  get secondLine(){return this.form2.get('secondLine');}

  get city(){return this.form2.get('city');}

  get district(){return this.form2.get('district');}

  // get teaSub(){
  //   return this.form2.get('teaSub');
  // }

  // get teaYear1(){
  //   return this.form2.get('teaBatchs.teaBatch1.teaYear1');
  // }

  // get teaClass1(){
  //   return this.form2.get('teaBatchs.teaBatch1.teaClass1');
  // }

  // get teaYear2(){
  //   return this.form2.get('teaBatchs.teaBatch2.teaYear2');
  // }

  // get teaClass2(){
  //   return this.form2.get('teaBatchs.teaBatch2.teaClass2');
  // }
}