import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{

    constructor(
        private http: Http,
        private router: Router
    ){
    }

    register(user){
        const header = new Headers();
        header.append('Authorization','Bearer '+localStorage.getItem('token'));
        return this.http.post('https://clzmate.herokuapp.com/user/register', user, {headers: header});
    }

    getAllUsers(){
        return this.http.get('https://clzmate.herokuapp.com/user/');
    }

    deleteUser(userId){
        const header = new Headers();
        header.append('Authorization','Bearer '+localStorage.getItem('token'));
        return this.http.delete('https://clzmate.herokuapp.com/user/'+userId, {headers: header});
    }

    getUserByRole(userRole){
        return this.http.get('https://clzmate.herokuapp.com/user/findByRole/'+userRole);
    }

    resetPassword(email){
        return this.http.get('https://clzmate.herokuapp.com/user/forgotPassword/'+email);
        // return this.http.get('http://localhost:3000/user/forgotPassword/'+email);
    }

    editUser(userId,updateData){
        const header = new Headers();
        header.append('Authorization','Bearer '+localStorage.getItem('token'));
        return this.http.patch('https://clzmate.herokuapp.com/user/userUpdate/'+userId, updateData, {headers: header});
    }

    saveNewPassword(email){
        return this.http.get('https://clzmate.herokuapp.com/user/newPassword/'+email);
        // return this.http.get('http://localhost:3000/user/newPassword/'+email);
    }

}