import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClzService } from 'src/app/services/clz.service';
import { Http } from '@angular/http';
import { PapersService } from './../../services/papers.service';

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

  testClz = []
  testPaper = [];
  
  selectedClz: [''];
  selectedClzNo: any;

  form12;

  constructor(
    private http: Http,
    private fb12: FormBuilder,
    private Clzes: ClzService,
    private Papers: PapersService
  ) {
    this.getAllClzes();
    this.getAllPapers();

    this.form12 = this.fb12.group({
      clzid: [''],
      paperId: ['']
    })
  }

  ngOnInit() {

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

  selectClzNo(selctdclzNo:any){
    this.selectedClzNo = selctdclzNo.clzNo;
    console.log(this.selectedClzNo);
  }

  selectChange(event:any) {
    this.selectedClzNo = event.target.value;
    console.log(this.selectedClzNo);
  }

}
