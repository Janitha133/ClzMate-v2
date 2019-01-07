import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Subject } from 'rxjs';
import { ClzService } from '../../../services/clz.service';
import { UserService } from '../../../services/users.service';

@Component({ 
  selector: 'app-ad-reg-student',
  templateUrl: './ad-reg-student.component.html',
  styleUrls: ['./ad-reg-student.component.scss'],
  providers: [ClzService, UserService]
})
export class AdRegStudentComponent implements OnInit {

  form1;
  newClass: String
  classArray : String[] = [];
  classes: any[] = [];
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private fb1: FormBuilder,
    private Clzes: ClzService,
    private Users: UserService
  ){ 
    this.form1 = this.fb1.group({
      firstLine: ['', Validators.required],
      secondLine: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      landNumber: [''],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.mobnumPattern)]],
      motherName: ['', Validators.required],
      momNumber: ['', Validators.required],
      fatherName:['', Validators.required], 
      dadNumber: ['', Validators.required],
      gardianName: [''],
      gardianNumber: [''],
      nicNo: [''],
      email: ['', [Validators.email,Validators.required]], 
      fullName: ['', Validators.required],
      batch:[''],
      school: ['', Validators.required],
      clzes: Array([]),
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

  onSubmit(form1){
    form1.value['role'] = "Student";
    form1.value['password'] = "password";
    console.log(form1.value);
    this.Users.register(form1.value)
      .subscribe(result => {
        if(result.json().state) alert("Student Registered Successfully\n"+"Index No: "+result.json().indexNo);
        else if(result.json().exist){ 
          alert("Student already exist");
        } 
        else alert("Error occured please register student again");
        console.log(result);
      })
    this.form1.reset();
  }

  get email(){return this.form1.get('email');}

  get fullName(){return this.form1.get('fullName');}

  get firstName(){return this.form1.get('firstName');} 

  get lastName(){return this.form1.get('lastName');}

  get birthday(){return this.form1.get('birthday');}

  get gender(){return this.form1.get('gender');}

  get school(){return this.form1.get('school');}

  get mobileNumber(){return this.form1.get('mobileNumber');}

  get firstLine(){return this.form1.get('firstLine');}

  get secondLine(){return this.form1.get('secondLine');}

  get city(){return this.form1.get('city');}

  get district(){return this.form1.get('district');}

  get batch(){return this.form1.get('batch');} 

  get fatherName(){return this.form1.get('fatherName');}

  get dadNumber(){return this.form1.get('dadNumber');}

  get motherName(){return this.form1.get('motherName');}

  get momNumber(){return this.form1.get('momNumber');}

  get clzes(){return this.form1.get('clzes')}

  // addClz(clz){
  //   console.log(clz.value);
    
  //   // this.clzes.push(clz.value);
  //   // this.clzes.push(new FormControl(clz));
  //   this.classArray.push(clz.value);
  //   // this.clzes[this.clzes.length] = "ssdf";
  //   // console.log(clz); 
  //   // console.log(this.classes);
  //   // clz._id = ''; 
  // }

  addclz(clz: HTMLInputElement){
    
    // this.topics.push(new FormControl(clz.value));
    // this.topics.push(clz.value);
    // console.log(clz.value);
    this.newClass = clz.value;
    const noOfClasses = this.classes.length;
    // console.log(this.newClass);
    // console.log(noOfClasses);
    // console.log(this.clzes.value[0]);
    // console.log(this.classes[0].subjectName);
    clz.value = ''; 
    for(var i=0; i<noOfClasses; i++){
      // console.log(this.newClass);
      if(this.classes[i].subjectName == this.newClass){
        console.log(this.newClass);
        // console.log(this.classes[i]._id)
        var classId = this.classes[i]._id;
        console.log(classId);
        this.classArray.push(classId); 
        // console.log(clz.value); 
        console.log(this.classArray);
      } else{
        // console.log("Not in the list");
      }
    }
  } 

  removeClz(topic:FormControl){
    this.clzes.removeAt(this.clzes.controls.indexOf(topic));
    // this.topics = this.topics.filter(item => item !== topic);
    console.log(topic);
    console.log(this.clzes.value);
  }

  consoleLog(){
    console.log("console logging");
  }

  setNewClz(clz) {
    console.log(clz.value);
    }

}
