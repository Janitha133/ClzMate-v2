import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { UserService } from 'src/app/services/users.service';
import { FormBuilder, Validators } from '@angular/forms';

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
  form8;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  toggleForm: boolean = false;
  selectedUser: any;

  constructor(
    private userService: UserService,
    private lc: LoginComponent,
    private router: Router,
    private fb1: FormBuilder
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

    this.form8 = this.fb1.group({
      firstLine: ['', Validators.required],
      secondLine: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      landNumber: [''],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.mobnumPattern)]],
      // nicNo: [''],
      // email: ['', [Validators.email, Validators.required]],
      // fullName: ['', Validators.required],
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // birthday: ['', Validators.required],
      // gender: ['', Validators.required],
      image: []
    })
  }

  ngOnInit() {
    if(!this.token){
      this.router.navigate(['']);
    }
  }

  updateUser(decodeJWT) {
    this.selectedUser = decodeJWT.user;
    this.toggleForm = !this.toggleForm;

    this.form8.patchValue({
      firstLine: decodeJWT.user.address.firstLine,
      secondLine: decodeJWT.user.address.secondLine,
      city: decodeJWT.user.address.city,
      district: decodeJWT.user.address.district,
      landNumber: decodeJWT.user.contactDetails.landNumber,
      mobileNumber: decodeJWT.user.contactDetails.mobileNumber,
      // nicNo: decodeJWT.user.nicNo,
      // email: decodeJWT.user.email,
      // fullName: decodeJWT.user.fullName,
      // firstName: decodeJWT.user.firstName,
      // lastName: decodeJWT.user.lastName,
      // birthday: decodeJWT.user.birthday,
      // gender: decodeJWT.user.gender
    })
  }

  fireEvent() {
    this.toggleForm = !this.toggleForm;
  }

  fireEvent2() {
    this.toggleForm = false;
  }

  onSubmitEdit(form8,user){
    console.log(form8.value);
    this.userService.editUser(user._id, form8.value)
      .subscribe(result => {
        if (result.json().state) alert("Admin updated successfully");
        else alert("Error occured please Admin again");
        console.log(result);
      })
  }

  
  // get email() { return this.form8.get('email'); }

  // get fullName() { return this.form8.get('fullName'); }

  // get firstName() { return this.form8.get('firstName'); }

  // get lastName() { return this.form8.get('lastName'); }

  // get birthday() { return this.form8.get('birthday'); }

  // get gender() { return this.form8.get('gender'); }

  get mobileNumber() { return this.form8.get('mobileNumber'); }

  get firstLine() { return this.form8.get('firstLine'); }

  get secondLine() { return this.form8.get('secondLine'); }

  get city() { return this.form8.get('city'); }

  get district() { return this.form8.get('district'); }

}
