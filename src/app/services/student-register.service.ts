import { Router } from '@angular/router';
import {Http} from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class StudentReegister{

    constructor(
        private http: Http,
        private router: Router
    ){

    }

    register(user){
        return this.http.post('https://polar-meadow-28819.herokuapp.com/user/register', user);
    }

}