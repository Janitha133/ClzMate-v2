import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { clzService} from '../../services/clz.service';

@Component({
  selector: 'app-admin-class-sched',
  templateUrl: './admin-class-sched.component.html',
  styleUrls: ['./admin-class-sched.component.scss'],
  providers: [clzService]
})
export class AdminClassSchedComponent implements OnInit {

  form5;

  constructor(
    private fb5: FormBuilder,
    private getClzes: clzService
  ) { 
    this.form5 = this.fb5.group({
      subjectName: ['', Validators.required],
      hallNo: ['', Validators.required],
      
    })
   }

  ngOnInit() {
  }

}
