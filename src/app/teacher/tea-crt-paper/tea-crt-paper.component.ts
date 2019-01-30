import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PapersService } from 'src/app/services/papers.service';
import { Http } from '@angular/http';
import { ClzService } from 'src/app/services/clz.service';

@Component({
  selector: 'app-tea-crt-paper',
  templateUrl: './tea-crt-paper.component.html',
  styleUrls: ['./tea-crt-paper.component.scss']
})
export class TeaCrtPaperComponent implements OnInit {
  form12;
  clzes: any[] = [];

  constructor(
    private http: Http,
    private paperz: PapersService,
    private Clzes: ClzService,
    private fb4: FormBuilder
  ) { 
    this.getAllClzes();

    this.form12 = this.fb4.group({

      momNumbeclzidr: [''],
      paperid:[''], 
      paperdate: [''],
      

    })
  }

  ngOnInit() {
  }

  onSubmit(form12){

    console.log(form12.value);
    // this.Users.register(form4.value)
    //   .subscribe(result => {
    //     if(result.json().state) alert("Card marker registered successfully");
    //     else if(result.json().exist) alert("Card marker already exist");
    //     else alert("Error occured please register Card marker again"); 
    //     console.log(result);
    //   })
    // this.form4.reset();
    this.paperz.createPaper(form12.value)
    .subscribe(result => {
      if(result.json().state) alert("successfully");
      else if(result.json().exist) alert("already exist");
      else alert("Error occured"); 
      console.log(result);
    })
    this.form12.reset();


  }

  
  getAllClzes() {
    this.Clzes.getAllClzes()
      .subscribe(response => {
        this.clzes = response.json().Clz;
        console.log(this.clzes);
      })
  }

}
