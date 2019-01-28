import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-paper-maker-sidebar',
  templateUrl: './paper-maker-sidebar.component.html',
  styleUrls: ['./paper-maker-sidebar.component.scss'],
  providers: [LoginComponent]
})
export class PaperMakerSidebarComponent implements OnInit {

  token = localStorage.getItem('token');
  decodeJWT;
  UserName = '';
  UserEmail = '';
  UserRole = '';
  imageURL = '../../../assets/nobody_m.original.jpg';

  constructor(
    private lc: LoginComponent,
    private router: Router
  ) {
    if (!this.token) {
      this.router.navigate(['']);
    } else {
      this.decodeJWT = lc.getDecodedAccessToken(this.token);
      this.UserName = this.decodeJWT.user.firstName;
      this.UserRole = this.decodeJWT.user.role;
      this.UserEmail = this.decodeJWT.user.email;
      // this.imageURL = this.decodeJWT.user.imageURL;
    }
  }

  ngOnInit() {
  }

}
