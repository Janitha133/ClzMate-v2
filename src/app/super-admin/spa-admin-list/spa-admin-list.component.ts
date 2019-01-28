import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from 'src/app/services/users.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-spa-admin-list',
  templateUrl: './spa-admin-list.component.html',
  styleUrls: ['./spa-admin-list.component.scss']
})
export class SpaAdminListComponent implements OnInit {

  users: any[] = [];
  // searchUsers: any[] = [];
  role: String = "Admin";
  selectedUser: any;
  toggleForm: boolean = false;
  form8;
  classes: any[] = [];
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private http: Http,
    private userService: UserService,
    private fb1: FormBuilder,
  ) {
    this.getUserByRole(this.role);

    this.form8 = this.fb1.group({
      firstLine: ['', Validators.required],
      secondLine: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      landNumber: [''],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.mobnumPattern)]],
      nicNo: [''],
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  selectRole(_role) {
    this.role = _role;
    this.getUserByRole(this.role);
  }

  getUserByRole(userRole) {
    this.userService.getUserByRole(userRole)
      .subscribe(res => {
        this.users = res.json().User;
        console.log(Object.values(res.json().User));
      })
  }

  //this is current fuc and when we considered role not need it.that time we can use select role fun
  // getAllStudents() {
  //   this.userService.getAllUsers()
  //     .subscribe(response => {
  //       this.searchUsers = response.json().User;
  //       console.log(Object.values(response.json().User));
  //     });
  // }

  searchByName(name: any) {
    console.log(name.value);
    if (!name.value) {
      this.getUserByRole(this.role);
    } else {
      let temp = [];
      for (let j of this.users) {
        for (var i of Object.values(j)) {
          if (i == null) {
            continue;
          }
          if ((i.toString().replace(/ /g, '').toUpperCase()).includes(name.value.toUpperCase())) {
            temp.push(j);
            break;
          }
        }
      }
      this.users = temp;
    }
  }

  deleteUser(user: any) {
    console.log(user._id);
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.userService.deleteUser(user._id)
      .subscribe(response => {
        if (response.json().state) alert("user deleted");
        else alert("error occured");
      })
  }

  userSelect(user: any) {
    alert(user.First_Name);
  }

  updateUser(user: any) {
    this.selectedUser = user;
    this.toggleForm = !this.toggleForm;

    this.form8.patchValue({
      firstLine: user.address.firstLine,
      secondLine: user.address.secondLine,
      city: user.address.city,
      district: user.address.district,
      landNumber: user.contactDetails.landNumber,
      mobileNumber: user.contactDetails.mobileNumber,
      nicNo: user.nicNo,
      email: user.email,
      fullName: user.fullName,
      stream: user,
      firstName: user.firstName,
      lastName: user.lastName,
      birthday: user.birthday,
      gender: user.gender
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
        if (result.json().state) alert("Card marker updated successfully");
        else alert("Error occured please update Card marker again");
        console.log(result);
      })
  }

  get email() { return this.form8.get('email'); }

  get fullName() { return this.form8.get('fullName'); }

  get firstName() { return this.form8.get('firstName'); }

  get lastName() { return this.form8.get('lastName'); }

  get birthday() { return this.form8.get('birthday'); }

  get gender() { return this.form8.get('gender'); }

  get mobileNumber() { return this.form8.get('mobileNumber'); }

  get firstLine() { return this.form8.get('firstLine'); }

  get secondLine() { return this.form8.get('secondLine'); }

  get city() { return this.form8.get('city'); }

  get district() { return this.form8.get('district'); }

}
