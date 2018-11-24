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

  onSubmit(form3){
    console.log(form3.value);
  }

  get email(){return this.form3.get('email');}

  get nicNo(){return this.form3.get('nicNo');}

  get fullName(){return this.form3.get('fullName');}

  get firstName(){return this.form3.get('firstName');}

  get lastName(){return this.form3.get('lastName');}

  get birthday(){return this.form3.get('birthday');}

  get mobileNumber(){return this.form3.get('mobileNumber');}

  get firstLine(){return this.form3.get('firstLine');}

  get secondLine(){return this.form3.get('secondLine');}

  get city(){return this.form3.get('city');}

  get district(){return this.form3.get('district');}

}
