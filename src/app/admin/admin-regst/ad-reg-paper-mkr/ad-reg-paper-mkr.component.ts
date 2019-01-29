import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ad-reg-paper-mkr',
  templateUrl: './ad-reg-paper-mkr.component.html',
  styleUrls: ['./ad-reg-paper-mkr.component.scss']
})
export class AdRegPaperMkrComponent implements OnInit {

  form3;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private Users: UserService,
 
    private fb3: FormBuilder
  ){ 
    this.form3 = this.fb3.group({
      firstLine: ['', Validators.required],
      secondLine: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      landNumber: [''],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.mobnumPattern)]],
      motherName: [''],
      momNumber: [''],
      fatherName:[''], 
      dadNumber: [''],
      gardianName: [''],
      gardianNumber: [''],
      nicNo: ['', Validators.required],
      email: ['', [Validators.email,Validators.required]], 
      fullName: ['', Validators.required],
      batch:[''],
      school: [''],
      clzes: [''],
      stream: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit(form3){
    form3.value['role'] = "Paper Marker";
    form3.value['password'] = "password";
    console.log(form3.value);
    this.Users.register(form3.value)
      .subscribe(result => {
        if(result.json().state) alert("Paper Marker Registered Successfully\n"+"User No: "+result.json().indexNo);
        else if(result.json().exist) alert("Paper marker already exist");
        else alert("Error occured please register Paper marker again");
        console.log(result);
      })
    this.form3.reset();
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

  get gender(){return this.form3.get('gender');}

}
