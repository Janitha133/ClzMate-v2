import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-ad-reg-student',
  templateUrl: './ad-reg-student.component.html',
  styleUrls: ['./ad-reg-student.component.scss']
})
export class AdRegStudentComponent implements OnInit {

  form1;

  constructor(
    private fb1: FormBuilder
  ){ 
    this.form1 = this.fb1.group({
      fullname: ['',  Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: fb1.group({
        year: ['', Validators.required],
        month: ['', Validators.required],
        day: ['', Validators.required]
      }),
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      contact: fb1.group({
        mobile: ['', [
          Validators.minLength(10),
          Validators.required
        ]],
        landLine: [''],
      }),
      address: fb1.group({
        line1: ['', Validators.required],
        line2: ['', Validators.required],
        city: ['', Validators.required],
        district: ['', Validators.required]
      }),
      batch: fb1.group({
        byear: ['', Validators.required],
        bclass: ['', Validators.required]
      }),
      subject: fb1.group({
        sub1: [''],
        sub2: [''],
        sub3: [''],
        sub4: ['']
      }),
      fatherName: ['', Validators.required],
      faContact: ['', Validators.required],
      motherName: ['', Validators.required],
      moContact: ['', Validators.required],
      garName: [''],
      GarContact: ['']
    })
  }
 
  ngOnInit() {
  }

  onSubmit(form1){
    console.log(form1.value);
  }

  get email(){
    return this.form1.get('email');
  }

  get fullname(){
    return this.form1.get('fullname');
  }

  get firstname(){
    return this.form1.get('firstname');
  }

  get lastname(){
    return this.form1.get('lastname');
  }

  get year(){
    return this.form1.get('birthday.year');
  }

  get month(){
    return this.form1.get('birthday.month');
  }

  get day(){
    return this.form1.get('birthday.day');
  }

  get mobile(){
    return this.form1.get('contact.mobile');
  }

  get line1(){
    return this.form1.get('address.line1');
  }

  get line2(){
    return this.form1.get('address.line2');
  }

  get city(){
    return this.form1.get('address.city');
  }

  get district(){
    return this.form1.get('address.district');
  }

  get byear(){
    return this.form1.get('batch.byear');
  }

  get bclass(){
    return this.form1.get('batch.bclass');
  }

  get fatherName(){
    return this.form1.get('fatherName');
  }

  get faContact(){
    return this.form1.get('faContact');
  }

  get motherName(){
    return this.form1.get('motherName');
  }

  get moContact(){
    return this.form1.get('moContact');
  }
}
