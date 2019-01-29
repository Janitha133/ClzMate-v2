import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { ClzService } from 'src/app/services/clz.service';
import { PapersService } from 'src/app/services/papers.service';

@Component({
  selector: 'app-paper-maker-viewpaper',
  templateUrl: './paper-maker-viewpaper.component.html',
  styleUrls: ['./paper-maker-viewpaper.component.scss']
})
export class PaperMakerViewpaperComponent implements OnInit {

  defaultClzId = "Class Id";
  clzes: any[] = [];
  papers: any[] = [];
  faketime: string = "08.00AM - 01.30PM";

  selectedClz: [''];
  selectedClzNo: any;
  a: any;
  b: any[] = [];
  count: number = 0;

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
    })
  }

  ngOnInit() {
  }

  onSubmit(form12){
    this.a = form12.value;
    console.log(form12.value);
    // for (let paper of this.papers) {
    //   console.log(paper);
    //   if(this.a == paper.clz.clzNo){
    //     this.b[this.count] = paper;
    //     this.count++;
    //     console.log(this.count);
    //   }
    // }
    // this.papers = this.b;
    // console.log(this.b);
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

}
