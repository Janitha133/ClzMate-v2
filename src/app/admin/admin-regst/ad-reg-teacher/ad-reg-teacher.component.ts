import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-ad-reg-teacher',
  templateUrl: './ad-reg-teacher.component.html',
  styleUrls: ['./ad-reg-teacher.component.scss']
})
export class AdRegTeacherComponent implements OnInit {

  form2;

  constructor(
    private fb2: FormBuilder
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
      mobileNumber: ['',Validators.required],
      landNumber: [''],
      firstLine: ['', Validators.required],
      secondLine: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      teaSub: ['', Validators.required],
      teaBatchs: fb2.group({
        teaBatch1: fb2.group({
          teaYear1: ['', Validators.required],
          teaClass1: ['', Validators.required]
        }),
        teaBatch2: fb2.group({
          teaYear2: ['', Validators.required],
          teaClass2: ['', Validators.required]
        })
      })
    })
  }
 
  ngOnInit() {
  }

  onSubmit(form2){
    console.log(form2.value);
  }

  get email(){return this.form2.get('email');}

  get fullName(){return this.form2.get('fullName');}

  get firstName(){return this.form2.get('firstName');}

  get lastName(){return this.form2.get('lastName');}

  get birthday(){return this.form2.get('birthday');}

  get mobileNumber(){return this.form2.get('mobileNumber');}

  get firstLine(){return this.form2.get('firstLine');}

  get secondLine(){return this.form2.get('secondLine');}

  get city(){return this.form2.get('city');}

  get district(){return this.form2.get('district');}

  get teaSub(){
    return this.form2.get('teaSub');
  }

  get teaYear1(){
    return this.form2.get('teaBatchs.teaBatch1.teaYear1');
  }

  get teaClass1(){
    return this.form2.get('teaBatchs.teaBatch1.teaClass1');
  }

  get teaYear2(){
    return this.form2.get('teaBatchs.teaBatch2.teaYear2');
  }

  get teaClass2(){
    return this.form2.get('teaBatchs.teaBatch2.teaClass2');
  }
}