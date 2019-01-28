import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { AdRegStudentComponent } from '../admin-regst/ad-reg-student/ad-reg-student.component';
import { Router } from '@angular/router';


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
  UserRole = '';
  UserEmail = '';
  imageURL = '../../../assets/nobody_m.original.jpg';
  
  constructor(
    private lc: LoginComponent,
    private router: Router
    ) { 
      if(!this.token){
          this.router.navigate(['']);
      } else{
          this.decodeJWT = lc.getDecodedAccessToken(this.token);
          this.UserName = this.decodeJWT.user.firstName;
          this.UserEmail = this.decodeJWT.user.email;
          this.UserRole = this.decodeJWT.user.role;
          this.imageURL = this.decodeJWT.user.imageURL;
      }
  }
 
  ngOnInit() {
    if(!this.token){
      this.router.navigate(['']);
    }
  }
  
  viewModeSide = 'dashboard';
}
