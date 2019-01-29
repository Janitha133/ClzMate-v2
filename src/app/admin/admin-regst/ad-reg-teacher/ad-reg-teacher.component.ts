import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { resource } from 'selenium-webdriver/http';
import { UserService } from '../../../services/users.service';
import { ClzService } from 'src/app/services/clz.service';

@Component({
  selector: 'app-ad-reg-teacher',
  templateUrl: './ad-reg-teacher.component.html',
  styleUrls: ['./ad-reg-teacher.component.scss'],
  providers: [UserService, AuthService]
})
export class AdRegTeacherComponent implements OnInit {

  form2;
  classes: any[] = [];
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private fb2: FormBuilder,
    private Clzes: ClzService,
    private Users: UserService
  ) { 
    this.form2 = this.fb2.group({
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
      clzes: new FormArray([]),
      stream: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }
 
  ngOnInit() {
    this.getAllClzes()
  }

  getAllClzes(){
    this.Clzes.getAllClzes()
      .subscribe(result => {
        this.classes = result.json().Clz;
        if(result.json()) console.log(result.json());
      })
  }

  onSubmit(form2){
    form2.value['role'] = "Teacher";
    form2.value['password'] = "password";
    console.log(form2.value);
    this.Users.register(form2.value)
      .subscribe(result => {
        if(result.json().state) alert("Teacher Registered Successfully\n"+"Teacher No: "+result.json().indexNo);
        else if(result.json().exist) alert("Teacher already exist");
        else alert("Error occured please register teacher again");
        console.log(result);
      })
    this.form2.reset();
  }

  addClz(clz){
    // console.log(clz);
    // this.clzes.push(clz);
    this.clzes.push(new FormControl(clz.value));
    // this.topics.push(clz.value);
    // this.clzes[this.clzes.length] = "ssdf";
    console.log(clz.value);
    // console.log(this.classes);
    // clz._id = ''; 
  }

  removeClz(topic:FormControl){
    this.clzes.removeAt(this.clzes.controls.indexOf(topic));
    // this.topics = this.topics.filter(item => item !== topic);
    console.log(topic);
  }

  get email(){return this.form2.get('email');}

  get fullName(){return this.form2.get('fullName');}

  get nicNo(){return this.form2.get('nicNo');}

  get firstName(){return this.form2.get('firstName');}

  get lastName(){return this.form2.get('lastName');}

  get birthday(){return this.form2.get('birthday');}

  get mobileNumber(){return this.form2.get('mobileNumber');}

  get firstLine(){return this.form2.get('firstLine');}

  get secondLine(){return this.form2.get('secondLine');}

  get city(){return this.form2.get('city');}

  get district(){return this.form2.get('district');}

  get gender(){return this.form2.get('gender');}

  get stream(){return this.form2.get('stream');}

  get clzes(){return this.form2.get('clzes')}


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