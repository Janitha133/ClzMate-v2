import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Subject } from 'rxjs';
import { ClzService } from '../../../services/clz.service';
import { UserService } from '../../../services/users.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  form8;
  classes: any[] = [];
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor(
    private fb1: FormBuilder,
    private Clzes: ClzService,
    private Users: UserService
  ) {
    this.form8 = this.fb1.group({
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
      clzes: new FormArray([]),
      stream: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    })
   }

  ngOnInit() {
    console.log(this.parentData.fullName);
  }

  fireEvent() {
    this.childEvent.emit(false);
  }

  get email(){return this.form8.get('email');}

  get fullName(){return this.form8.get('fullName');}

  get firstName(){return this.form8.get('firstName');}

  get lastName(){return this.form8.get('lastName');}

  get birthday(){return this.form8.get('birthday');}

  get gender(){return this.form8.get('gender');}

  get school(){return this.form8.get('school');}

  get mobileNumber(){return this.form8.get('mobileNumber');}

  get firstLine(){return this.form8.get('firstLine');}

  get secondLine(){return this.form8.get('secondLine');}

  get city(){return this.form8.get('city');}

  get district(){return this.form8.get('district');}

  get batch(){return this.form8.get('batch');}

  get fatherName(){return this.form8.get('fatherName');}

  get dadNumber(){return this.form8.get('dadNumber');}

  get motherName(){return this.form8.get('motherName');}

  get momNumber(){return this.form8.get('momNumber');}

  get clzes(){return this.form8.get('clzes')}

}
