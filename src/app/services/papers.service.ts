import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PapersService {

  constructor(
    private http: Http,
    private router: Router
  ) { }

  getAllPapers(){
    return this.http.get('https://clzmate.herokuapp.com/paper/');
  }

  createPaper(d){
    return this.http.post('https://clzmate.herokuapp.com/paper/',d);
  }

}

