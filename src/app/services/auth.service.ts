import { Router } from '@angular/router';
import {Http, CookieXSRFStrategy} from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{

    constructor(
        private http: Http,
        private router: Router
    ){

    }

    login(user){
        console.log("login route")
        // return this.http.post('https://polar-meadow-28819.herokuapp.com/user/login', user);
        return this.http.post('http://localhost:3000/user/login', user);
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