import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AttendanceService{

    constructor(
        private http: Http,
        private router: Router
    ){

    }

    getAllAttendance(){
        return this.http.get('https://clzmate.herokuapp.com/attendance/allAttendance');
    }

    getClzAttendance(year, month, clzId){
        return this.http.get('https://clzmate.herokuapp.com/attendance/attendanceForClzId/'+ year + month + clzId);
    }

}