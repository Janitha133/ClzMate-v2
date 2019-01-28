import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-sp-sidebar',
  templateUrl: './sp-sidebar.component.html',
  styleUrls: ['./sp-sidebar.component.scss'],
  providers: [LoginComponent]
})
export class SpSidebarComponent implements OnInit {

  token2 = localStorage.getItem('token');
  decodeJWT;
  UserName = '';
  UserRole = '';
  UserEmail = '';
  imageURL = '../../../assets/nobody_m.original.jpg';

  constructor(
    private lc: LoginComponent,
    private router: Router
  ) {
    if (!this.token2) {
      this.router.navigate(['']);
    } else {
      this.decodeJWT = lc.getDecodedAccessToken(this.token2);
      this.UserName = this.decodeJWT.user.firstName;
      this.UserRole = this.decodeJWT.user.role;
      this.UserEmail = this.decodeJWT.user.email;
      // this.imageURL = this.decodeJWT.user.imageURL;
    }
  }

  ngOnInit() {
  }

}
