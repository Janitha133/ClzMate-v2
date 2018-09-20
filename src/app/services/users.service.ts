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

    getAllUsers(){
        return this.http.get('https://polar-meadow-28819.herokuapp.com/user/');
    }

    deleteUser(userId){
        return this.http.delete('https://polar-meadow-28819.herokuapp.com/user/'+userId);
    }

}