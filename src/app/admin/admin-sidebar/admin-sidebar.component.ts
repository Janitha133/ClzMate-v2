import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { AdRegStudentComponent } from '../admin-regst/ad-reg-student/ad-reg-student.component';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
  providers: [LoginComponent,AdRegStudentComponent]
})
export class AdminSidebarComponent implements OnInit {

  token = localStorage.getItem('token');
  decodeJWT;
  UserName = '';
  UserEmail = '';
  
  constructor(private lc: LoginComponent) { 
    this.decodeJWT = lc.getDecodedAccessToken(this.token);
    this.UserName = this.decodeJWT.user.firstName;
    this.UserEmail = this.decodeJWT.user.email;
  }
 
  ngOnInit() {
  }
  
  viewModeSide = 'dashboard';
}
