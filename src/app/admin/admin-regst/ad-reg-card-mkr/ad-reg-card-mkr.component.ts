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
      district: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit(form4){
    console.log(form4.value);
  }

  get email(){return this.form4.get('email');}

  get fullName(){return this.form4.get('fullName');}

  get firstName(){return this.form4.get('firstName');}

  get lastName(){return this.form4.get('lastName');}

  get birthday(){return this.form4.get('birthday');}

  get mobileNumber(){return this.form4.get('mobileNumber');}

  get firstLine(){return this.form4.get('firstLine');}

  get secondLine(){return this.form4.get('secondLine');}

  get city(){return this.form4.get('city');}

  get district(){return this.form4.get('district');}
  
}
