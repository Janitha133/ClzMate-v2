import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-ad-reg-paper-mkr',
  templateUrl: './ad-reg-paper-mkr.component.html',
  styleUrls: ['./ad-reg-paper-mkr.component.scss']
})
export class AdRegPaperMkrComponent implements OnInit {

  form3;

  constructor(
    private fb3: FormBuilder
  ){ 
    this.form3 = this.fb3.group({
      fullname: ['',  Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: fb3.group({
        year: ['', Validators.required],
        month: ['', Validators.required],
        day: ['', Validators.required]
      }),
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      contact: fb3.group({
        mobile: ['', [
          Validators.minLength(10),
          Validators.required
        ]],
        landLine: [''],
      }),
      address: fb3.group({
        line1: ['', Validators.required],
        line2: ['', Validators.required],
        city: ['', Validators.required],
        district: ['', Validators.required]
      }),
    })
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value);
  }

  get email(){
    return this.form3.get('email');
  }

  get fullname(){
    return this.form3.get('fullname');
  }

  get firstname(){
    return this.form3.get('firstname');
  }

  get lastname(){
    return this.form3.get('lastname');
  }

  get year(){
    return this.form3.get('birthday.year');
  }

  get month(){
    return this.form3.get('birthday.month');
  }

  get day(){
    return this.form3.get('birthday.day');
  }

  get mobile(){
    return this.form3.get('contact.mobile');
  }

  get line1(){
    return this.form3.get('address.line1');
  }

  get line2(){
    return this.form3.get('address.line2');
  }

  get city(){
    return this.form3.get('address.city');
  }

  get district(){
    return this.form3.get('address.district');
  }
}
