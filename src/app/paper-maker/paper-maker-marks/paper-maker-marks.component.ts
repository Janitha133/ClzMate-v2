import { UserService } from './../../services/users.service';
import { MarksService } from './../../services/marks.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClzService } from 'src/app/services/clz.service';
import { Http } from '@angular/http';
import { PapersService } from './../../services/papers.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-paper-maker-marks',
  templateUrl: './paper-maker-marks.component.html',
  styleUrls: ['./paper-maker-marks.component.scss'],
  providers: [ClzService, PapersService]
})
export class PaperMakerMarksComponent implements OnInit {

  defaultClzId = "Class Id";
  defaultpaperId = "Paper Id";
  clzes: any[] = [];
  papers: any[] = [];

  students = [];
  students2 = []

  testClz = []
  testPaper = [];

  selectedClz: [''];
  selectedClzNo: any;

  form12;

  constructor(
    private http: Http,
    private fb12: FormBuilder,
    private Clzes: ClzService,
    private Papers: PapersService,
    private markrsService: MarksService,
    private userService: UserService
  ) {
    this.getAllClzes();
    this.getAllPapers();

    this.form12 = this.fb12.group({
      clzid: [''],
      paperId: ['']
    })
  }

  ngOnInit() {
    this.Clzes.getAllClzes()
      .subscribe(res => {
        //assign students array to students
      });

    this.userService.getAllStudents()
      .subscribe(res => {
        this.students = res.json().User;
        this.students2 = this.students;
      });

  }

  selectedPaper;

  getPaperId(p) {
    for (let i of this.papers) {
      if (i.paperNo === p) {
        this.selectedPaper = i._id;
        break;
      }
    }
    console.log(this.selectedPaper);
  }

  submitMarks(marks, item) {

    if (marks > 100 || marks < 0) {
      alert("Invalid Marks");
    } else {
      console.log(marks);
      console.log(item._id);
      let token = localStorage.getItem('token');
      let pmId = this.getDecodedAccessToken(token).user._id;

      this.markrsService.addMarks(marks, item._id, this.selectedPaper, pmId)
        .subscribe(res => {
          console.log(res.json());
        })

    }


  }

  getAllClzes() {
    this.Clzes.getAllClzes()
      .subscribe(response => {
        this.clzes = response.json().Clz;
        console.log(this.clzes);
      })
  }

  getAllPapers() {
    this.Papers.getAllPapers()
      .subscribe(response => {
        this.papers = response.json().Papers;
        console.log(this.papers);
      })
  }

  selectClzNo(selctdclzNo: any) {
    this.selectedClzNo = selctdclzNo.clzNo;
    console.log(this.selectedClzNo);
  }

  selectChange(a) {
    this.students2 = [];
    console.log(a);
    let classId;
    for (let i of this.clzes) {
      if (i.clzNo === a) {
        classId = i._id;
      }
    }

    console.log(classId);

    for (let i of this.students) {
      for (let j of i.clzes) {
        if (j === classId) {
          this.students2.push(i);
        }
      }
    }

    console.log(this.students2);
  }



  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

}
