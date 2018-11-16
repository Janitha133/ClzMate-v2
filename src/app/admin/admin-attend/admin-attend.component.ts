import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admin-attend',
  templateUrl: './admin-attend.component.html',
  styleUrls: ['./admin-attend.component.scss']
})
export class AdminAttendComponent implements OnInit {

  users: any[] = [];

  constructor(
    private http: Http,
    private userService: UserService
  ) {
    this.getAllStudents();
  }

  ngOnInit() {
  }

  getAllStudents() {
    this.userService.getAllUsers()
      .subscribe(response => {
        this.users = response.json().User;
        console.log(this.users);
        console.log(Object.values(response.json().User));
      });
  }

}
