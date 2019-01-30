import { ClzService } from './../../services/clz.service';
import { MarksService } from './../../services/marks.service';
import { Component, OnInit } from '@angular/core';
import { PapersService } from 'src/app/services/papers.service';

@Component({
  selector: 'app-paper-maker-view-mrks',
  templateUrl: './paper-maker-view-mrks.component.html',
  styleUrls: ['./paper-maker-view-mrks.component.scss']
})
export class PaperMakerViewMrksComponent implements OnInit {

  marks = [];
  marks_filtered = [];

  form12;

  defaultClzId = "Class Id";
  defaultpaperId = "Paper Id";
  clzes: any[] = [];
  papers: any[] = [];
  selectedClzNo: any;
  students = [];
  students2 = [];
  selectedPaper;


  constructor(
    private marksService: MarksService,
    private Clzes: ClzService,
    private Papers: PapersService,
  ) { 
    this.getAllClzes();
    this.getAllPapers();
  }

  ngOnInit() {
    this.marksService.getAllMarks()
      .subscribe(res=>{
        console.log(res.json());
        let temp = res.json().mark;
        for(let i of temp){
          if(i.mark > 0 && i.mark < 100){
            this.marks.push(i);
          }
        }
        this.marks_filtered = this.marks;
      })
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
        this.class = i._id;
        this.filterMarks(this.class, this.paper);
      }
    }

    // console.log(classId);

    // for (let i of this.students) {
    //   for (let j of i.clzes) {
    //     if (j === classId) {
    //       this.students2.push(i);
    //     }
    //   }
    // }

    console.log(this.students2);
  }

  getPaperId(p) {
    for (let i of this.papers) {
      if (i.paperNo === p) {
        this.selectedPaper = i._id;
        this.paper = i._id;
        this.filterMarks(this.class, this.paper);
        break;
      }
    }
    console.log(this.selectedPaper);
  }

  class="all";
  paper="all";

  filterMarks(c, p){
    this.marks_filtered = [];
    if(c == "all" && p == "all"){
      this.marks_filtered = this.marks;
    }else if(c === 'all' && p !== 'all'){
      for(let i of this.marks){
        if(i.paper._id === p && this.marks_filtered.indexOf(i)!>-1){
          this.marks_filtered.push(i)
          
        }
      }
    }else if(c !== 'all' && p === 'all'){
      for(let i of this.marks){
        if(i.paper.clz === c && this.marks_filtered.indexOf(i)!>-1){
          this.marks_filtered.push(i)
        }
      }
    }else{
      this.marks_filtered = this.marks;
    }
    
  }

}
