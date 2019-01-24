import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {

  users: any[] = [];
  // searchUsers: any[] = [];
  role: String = "Student";
  selectedUser: any;
  toggleForm: boolean = false;

  constructor(
    private http: Http,
    private userService: UserService
  ) {
    // this.getAllStudents();
    this.getUserByRole(this.role);
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

  searchByName(name:any) {
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

  deleteUser(user:any) {
    console.log(user._id);
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.userService.deleteUser(user._id)
      .subscribe(response => {
        if (response.json().state) alert("user deleted");
        else alert("error occured");
      })
  }

  userSelect(user:any) {
    alert(user.First_Name);
  }

  updateUser(user:any) {
    this.selectedUser = user;
    this.toggleForm = !this.toggleForm;
  }

}
