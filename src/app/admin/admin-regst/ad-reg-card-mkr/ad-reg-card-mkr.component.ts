import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-ad-reg-card-mkr',
  templateUrl: './ad-reg-card-mkr.component.html',
  styleUrls: ['./ad-reg-card-mkr.component.scss']
})
export class AdRegCardMkrComponent implements OnInit {

  form4;

  constructor(
    private fb4: FormBuilder
  ){ 
    this.form4 = this.fb4.group({
      fullname: ['',  Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: fb4.group({
        year: ['', Validators.required],
        month: ['', Validators.required],
        day: ['', Validators.required]
      }),
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      contact: fb4.group({
        mobile: ['', [
          Validators.minLength(10),
          Validators.required
        ]],
        landLine: [''],
      }),
      address: fb4.group({
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
    return this.form4.get('email');
  }

  get fullname(){
    return this.form4.get('fullname');
  }

  get firstname(){
    return this.form4.get('firstname');
  }

  get lastname(){
    return this.form4.get('lastname');
  }

  get year(){
    return this.form4.get('birthday.year');
  }

  get month(){
    return this.form4.get('birthday.month');
  }

  get day(){
    return this.form4.get('birthday.day');
  }

  get mobile(){
    return this.form4.get('contact.mobile');
  }

  get line1(){
    return this.form4.get('address.line1');
  }

  get line2(){
    return this.form4.get('address.line2');
  }

  get city(){
    return this.form4.get('address.city');
  }

  get district(){
    return this.form4.get('address.district');
  }
}
