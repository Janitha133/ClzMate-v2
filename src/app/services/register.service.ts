import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class userRegister{

    constructor(
        private http: Http,
        private router: Router
    ){

    }

    register(user){
        return this.http.post('https://polar-meadow-28819.herokuapp.com/user/register', user);
        // return this.http.post('http://localhost:3000/user/register', user);
    }

}