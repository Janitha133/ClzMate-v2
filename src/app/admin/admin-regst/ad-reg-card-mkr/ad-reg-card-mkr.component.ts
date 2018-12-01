import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { UserService } from 'src/app/services/users.service';


@Component({
  selector: 'app-ad-reg-card-mkr',
  templateUrl: './ad-reg-card-mkr.component.html',
  styleUrls: ['./ad-reg-card-mkr.component.scss']
})
export class AdRegCardMkrComponent implements OnInit {

  form4;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private Users: UserService,
    private fb4: FormBuilder
  ){ 
    this.form4 = this.fb4.group({
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

  onSubmit(form4){
    form4.value['role'] = "Card Marker";
    form4.value['password'] = "password";
    console.log(form4.value);
    this.Users.register(form4.value)
      .subscribe(result => {
        if(result.json().state) alert("Card marker registered successfully");
        else if(result.json().exist) alert("Card marker already exist");
        else alert("Error occured please register Card marker again");
        console.log(result);
      })
    this.form4.reset();
  }

  get email(){return this.form4.get('email');}

  get nicNo(){return this.form4.get('nicNo');}

  get fullName(){return this.form4.get('fullName');}

  get firstName(){return this.form4.get('firstName');}

  get lastName(){return this.form4.get('lastName');}

  get birthday(){return this.form4.get('birthday');}

  get mobileNumber(){return this.form4.get('mobileNumber');}

  get firstLine(){return this.form4.get('firstLine');}

  get secondLine(){return this.form4.get('secondLine');}

  get city(){return this.form4.get('city');}

  get district(){return this.form4.get('district');}

  get gender(){return this.form4.get('gender');}
  
}
