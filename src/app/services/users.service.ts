import { Router } from '@angular/router';
import {Http} from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{

    constructor(
        private http: Http,
        private router: Router
    ){

    }

    register(user){
        return this.http.post('https://polar-meadow-28819.herokuapp.com/user/register', user);
    }

    getAllUsers(){
        return this.http.get('https://polar-meadow-28819.herokuapp.com/user/');
    }

    deleteUser(userId){
        return this.http.delete('https://polar-meadow-28819.herokuapp.com/user/'+userId);
    }

    getUserByRole(userRole){
        return this.http.get('https://polar-meadow-28819.herokuapp.com/user/findByRole/'+userRole);
    }

    resetPassword(email){
        return this.http.get('https://polar-meadow-28819.herokuapp.com/user/forgotPassword/'+email);
    }

}