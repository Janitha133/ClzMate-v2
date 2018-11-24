import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClzService} from '../../services/clz.service';
import { SubjectService } from '../../services/subject.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-admin-class-sched',
  templateUrl: './admin-class-sched.component.html',
  styleUrls: ['./admin-class-sched.component.scss'],
  providers: [ClzService, SubjectService]
})
export class AdminClassSchedComponent implements OnInit {

  form5;
  form6;
  classes: any[] = [];
  subjects: any[] = [];

  constructor(
    private fb5: FormBuilder,
    private fb6: FormBuilder,
    private Clzes: ClzService,
    private Subjects: SubjectService
  ) { 
    this.form5 = this.fb5.group({
      subjectName: ['', Validators.required],
      hallNo: ['', Validators.required],
      grade: ['', Validators.required],
      batch: ['', Validators.required],
      stream: ['', Validators.required],
      time: ['', Validators.required]
    })

    this.form6 = this.fb6.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      subjectStream: ['', Validators.required]
    })
   }

  ngOnInit() {
    this.getAllClzes(),
    this.getAllSubjects()
  }

  getAllClzes(){
    this.Clzes.getAllClzes()
      .subscribe(result => {
        this.classes = result.json().Clz;
        if(result.json()) console.log(result.json());
      })
  }

  getAllSubjects(){
    this.Subjects.getAllSubjects()
      .subscribe(result => {
        this.subjects = result.json().subject;
        if(result.json()) console.log(result.json());
      })
  }

  onSubmit(form5){
    console.log(form5.value);
    this.Clzes.createClz(form5.value)
      .subscribe(result => {
        if(result.json().state) {
          alert("Class Created Successfully");
          this.getAllClzes();
        }
        else alert("Something Went Wrong");
        console.log(result);
      })
    this.form5.reset();
  }

  onSubmitSubject(form6){
    console.log(form6.value);
    this.Clzes.createSubject(form6.value)
      .subscribe(result => {
        if(result.json().state){
          alert("Subject added successfully");
          this.getAllSubjects();
        }
        else alert("Something Went Wrong");
        console.log(result);
      })
    this.form6.reset();
  }

  deleteClz(clz){
    console.log(clz._id);
    let index = this.classes.indexOf(clz);
    this.classes.splice(index, 1);
    this.Clzes.deleteClz(clz._id)
      .subscribe(response => {
        if(response.json().state) alert("Class Deleted");
        else alert("Something Went Wrong");
      })
  }

  searchBySubject(name){
    console.log(name.value);
    if(!name.value){
      this.getAllClzes();
    } else {
      let temp = [];
      for(let j of this.classes){
        for(var i of Object.values(j)){
          if((i.toString().replace(/ /g,'').toUpperCase()).includes(name.value.toUpperCase())){
            temp.push(j);
            break;
          }
        }
      }
      this.classes = temp;
    }
  }

  get subjectName(){ return this.form5.get('subjectName'); }

  get hallNo(){ return this.form5.get('hallNo'); }

  get grade(){ return this.form5.get('grade'); }

  get batch(){ return this.form5.get('batch'); }

  get stream(){ return this.form5.get('stream'); }

  get time(){ return this.form5.get('time'); }


  get name(){return this.form6.get('name');}

  get level(){return this.form6.get('level');}

  get subjectStream(){return this.form6.get('stream');}
}
