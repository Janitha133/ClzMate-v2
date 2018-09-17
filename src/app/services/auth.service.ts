import { Router } from '@angular/router';
import {Http} from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{

    constructor(
        private http: Http,
        private router: Router
    ){

    }

    login(user){
        return this.http.post('https://polar-meadow-28819.herokuapp.com/user/login', user);
    }

    isLogged(){
        if(localStorage.getItem('token')){
            return true;
        }
        return false;
    }   

    logOut(){
        localStorage.removeItem('token');
        this.router.navigate([''])
    }

}