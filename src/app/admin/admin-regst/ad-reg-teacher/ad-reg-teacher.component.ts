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
      fullname: ['',  Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: fb2.group({
        year: ['', Validators.required],
        month: ['', Validators.required],
        day: ['', Validators.required]
      }),
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      contact: fb2.group({
        mobile: ['', [
          Validators.minLength(10),
          Validators.required
        ]],
        landLine: [''],
      }),
      address: fb2.group({
        line1: ['', Validators.required],
        line2: ['', Validators.required],
        city: ['', Validators.required],
        district: ['', Validators.required]
      }),
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

  get email(){
    return this.form2.get('email');
  }

  get fullname(){
    return this.form2.get('fullname');
  }

  get firstname(){
    return this.form2.get('firstname');
  }

  get lastname(){
    return this.form2.get('lastname');
  }

  get year(){
    return this.form2.get('birthday.year');
  }

  get month(){
    return this.form2.get('birthday.month');
  }

  get day(){
    return this.form2.get('birthday.day');
  }

  get mobile(){
    return this.form2.get('contact.mobile');
  }

  get line1(){
    return this.form2.get('address.line1');
  }

  get line2(){
    return this.form2.get('address.line2');
  }

  get city(){
    return this.form2.get('address.city');
  }

  get district(){
    return this.form2.get('address.district');
  }

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