import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(
    private http: Http
  ) { }

  addMarks(marks, student, paper, paperMarker){
    return this.http.post('https://clzmate.herokuapp.com/mark/addMark', {
      'mark': marks,
      'student': student,
      'paper':paper,
      'paperMarker':paperMarker
    });
  }
}
