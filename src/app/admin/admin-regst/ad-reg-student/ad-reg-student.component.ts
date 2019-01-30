import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Subject } from 'rxjs';
import { ClzService } from '../../../services/clz.service';
import { UserService } from '../../../services/users.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  printArray : String[] = [];
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
      // clzes: Array([]),
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
    form1.value['clzes'] = this.classArray;
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
    this.printArray.length = 0
    this.classArray.length = 0
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

  addclz(clz: HTMLInputElement){
    this.newClass = clz.value;
    const noOfClasses = this.classes.length;
    clz.value = ''; 
    for(var i=0; i<noOfClasses; i++){
      if(this.classes[i].clzNo == this.newClass){
        var classId = this.classes[i]._id;
        this.classArray.push(classId); 
        this.printArray.push(this.newClass);
      }
    }
  } 

  removeClz(topic:FormControl){
    this.clzes.removeAt(this.clzes.controls.indexOf(topic));
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
