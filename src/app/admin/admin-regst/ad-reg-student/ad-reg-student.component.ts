import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-ad-reg-student',
  templateUrl: './ad-reg-student.component.html',
  styleUrls: ['./ad-reg-student.component.scss']
})
export class AdRegStudentComponent implements OnInit {

  form;

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = fb.group({
      fullname: [''],
      firstname: [''],
      lastname: [''],
      birthday: [{
        year: [''],
        month: [''],
        date: ['']
      }],
      contact : [{
        mobile: [''],
        landLine: [''],
      }],
      address: [{
        no: [''],
        firstStreet: [''],
        secondStreet: [''],
        city: [''],
        district: ['']
      }],
      classInfo: [{
        subject: [''],
        batch: [{
          year: [''],
          class: ['']
        }]
      }]
    })
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value);
  }

}
