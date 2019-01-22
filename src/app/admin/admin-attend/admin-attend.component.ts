import { Component, OnInit } from '@angular/core';
import { Http, CookieXSRFStrategy } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';

import { UserService } from '../../services/users.service';
import { AttendanceService } from '../../services/attendance.service';
import { ClzService } from 'src/app/services/clz.service';

formatDate(new Date(), 'yyyy/MM/dd', 'en');
console.log(formatDate);

@Component({
  selector: 'app-admin-attend',
  templateUrl: './admin-attend.component.html',
  styleUrls: ['./admin-attend.component.scss'],
  providers: [UserService, AttendanceService, ClzService]
})
export class AdminAttendComponent implements OnInit {

  year = "Year";
  month = "Month";
  clzId = "Class Id";
  form7;
  studentAttendance: any[] = [];
  clzes: any[] = [];
  currentYear: Date

  constructor(
    private fb7: FormBuilder,
    private http: Http,
    private User: UserService,
    private Attendances: AttendanceService,
    private Clzes: ClzService
  ) {
    this.getAllClzes()
    this.form7 = this.fb7.group({
      year: [''],
      month: [''],
      clzId: ['']
    })
  }

  ngOnInit() {
  }

  onSubmit(form7){
    console.log(form7.value);
  }

  getAllClzes(){
    this.Clzes.getAllClzes()
      .subscribe(response => {
        this.clzes = response.json().Clz;
        console.log(this.clzes);
      })
  }

  getAllAttendance() {
    this.Attendances.getAllAttendance()
      .subscribe(response => {
        this.studentAttendance = response.json().Attendance;
        console.log(this.studentAttendance);
        // console.log(Object.values(response.json().Attendance));
      });
  }

  getClzAttendance(year, month, clzId){
    this.Attendances.getClzAttendance(year, month, clzId)
      .subscribe(response => {
        this.studentAttendance = response.json().Attendance;
        console.log(this.studentAttendance);
      })
  }
  
}

// function method($scope){
//   $scope.date = new Date();
// }