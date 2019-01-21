import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { AttendanceService } from '../../services/attendance.service';
import { Http } from '@angular/http';
import { FormBuilder } from '@angular/forms';

import { formatDate } from '@angular/common';

formatDate(new Date(), 'yyyy/MM/dd', 'en');
console.log(formatDate);

@Component({
  selector: 'app-admin-attend',
  templateUrl: './admin-attend.component.html',
  styleUrls: ['./admin-attend.component.scss'],
  providers: [UserService, AttendanceService]
})
export class AdminAttendComponent implements OnInit {

  year = "Year";
  month = "Month";
  clzId = "Class Id";
  form7;
  studentAttendance: any[] = [];
  currentYear: Date

  constructor(
    private fb7: FormBuilder,
    private http: Http,
    private User: UserService,
    private Attendances: AttendanceService
  ) {
    this.getAllAttendance(); 
    this.form7 = this.fb7.group({
      year: [''],
      month: [''],
      clzId: ['']
    })
  }

  ngOnInit() {
  }

  getAllAttendance() {
    this.Attendances.getAllAttendance()
      .subscribe(response => {
        this.studentAttendance = response.json().Attendance;
        console.log(this.studentAttendance);
        // console.log(Object.values(response.json().Attendance));
      });
  }

  onSubmit(form7){
    console.log("form 7");
  }
}

// function method($scope){
//   $scope.date = new Date();
// }