import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-paper-maker-marks',
  templateUrl: './paper-maker-marks.component.html',
  styleUrls: ['./paper-maker-marks.component.scss']
})
export class PaperMakerMarksComponent implements OnInit {

  defaultYear = "Year";
  defaultClzId = "Class Id";
  defaultpaperId = "Paper Id";

  form12;

  constructor(
    private fb12: FormBuilder,
  ) {
    this.form12 = this.fb12.group({
      year: [''],
      clzid: [''],
      paperId: ['']
    })
   }

  ngOnInit() {
  }

}
