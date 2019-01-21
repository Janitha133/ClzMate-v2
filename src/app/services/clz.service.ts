import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ClzService{

    constructor(
        private http: Http,
        private router: Router
    ){

    }

    getAllClzes(){
        return this.http.get('https://clzmate.herokuapp.com/clz/');
    }

    createClz(clz){
        return this.http.post('https://clzmate.herokuapp.com/clz/', clz);
    }

    deleteClz(clzId){
        return this.http.delete('https://clzmate.herokuapp.com/clz/'+clzId);
    }

    createSubject(subject){
        return this.http.post('https://clzmate.herokuapp.com/subject/', subject );
    }

}