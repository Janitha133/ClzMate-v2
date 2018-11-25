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
        return this.http.get('https://polar-meadow-28819.herokuapp.com/clz/');
        // return this.http.get('http://localhost:3000/clz/');
    }

    createClz(clz){
        return this.http.post('https://polar-meadow-28819.herokuapp.com/clz/', clz);
    }

    deleteClz(clzId){
        return this.http.delete('https://polar-meadow-28819.herokuapp.com/clz/'+clzId);
    }

    createSubject(subject){
        return this.http.post('https://polar-meadow-28819.herokuapp.com/subject/', subject );
    }

}