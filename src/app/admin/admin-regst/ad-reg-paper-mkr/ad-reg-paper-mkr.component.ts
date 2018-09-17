import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-ad-reg-paper-mkr',
  templateUrl: './ad-reg-paper-mkr.component.html',
  styleUrls: ['./ad-reg-paper-mkr.component.scss']
})
export class AdRegPaperMkrComponent implements OnInit {

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
