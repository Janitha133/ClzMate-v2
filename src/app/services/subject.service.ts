import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class SubjectService{

    constructor(
        private http: Http,
        private router: Router
    ){

    }
    
    getAllSubjects(){
        return this.http.get('https://polar-meadow-28819.herokuapp.com/subject/');
    }

    createSubject(subject){
        return this.http.post('https://polar-meadow-28819.herokuapp.com/subject/addSubject/', subject );
    }

}