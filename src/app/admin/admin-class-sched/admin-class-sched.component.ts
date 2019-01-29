import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClzService} from '../../services/clz.service';
import { SubjectService } from '../../services/subject.service';
import { validateConfig } from '@angular/router/src/config';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-class-sched',
  templateUrl: './admin-class-sched.component.html',
  styleUrls: ['./admin-class-sched.component.scss'],
  providers: [ClzService, SubjectService, UserService]
})
export class AdminClassSchedComponent implements OnInit {

  form5;
  form6;
  classes: any[] = [];
  subjects: any[] = [];
  cardMarkersArray: any[] = [];
  teachersArray: any[] = [];

  constructor(
    private fb5: FormBuilder,
    private fb6: FormBuilder,
    private Clzes: ClzService,
    private Subjects: SubjectService,
    private Users: UserService
  ) { 
    this.form5 = this.fb5.group({
      subjectName: ['', Validators.required],
      hallNo: ['', Validators.required],
      grade: ['', Validators.required],
      teacher: [''],
      papermarker: [''],
      date: [''],
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
    this.getAllSubjects(),
    this.getCardMarkers(),
    this.getTeachers()
  }

  getAllClzes(){
    this.Clzes.getAllClzes()
      .subscribe(result => {
        this.classes = result.json().Clz;
        if(result.json()) console.log(result.json());
      })
  }

  getCardMarkers(){
    this.Users.getUserByRole('Card Marker')
      .subscribe(cardMarkers => {
        this.cardMarkersArray = cardMarkers.json().User;
        console.log(this.cardMarkersArray);
      })
  }

  getTeachers(){
    this.Users.getUserByRole('Teacher')
      .subscribe(teachers => {
        this.teachersArray = teachers.json().User;
        console.log(this.teachersArray)
      })
  }

  getAllSubjects(){
    this.Subjects.getAllSubjects()
      .subscribe(result => {
        this.subjects = result.json().Subject;
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

  onSubmitNewSubject(form6){
    console.log(form6.value);
    this.Subjects.createSubject(form6.value)
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

  searchByValueInClasses(searchValue){
    console.log(searchValue.value);
    if(!searchValue.value){
      this.getAllClzes();
    } else { 
      let temp = [];
      for(let j of this.classes){
        for(var i of Object.values(j)){
          if((i.toString().replace(/ /g,'').toUpperCase()).includes(searchValue.value.toUpperCase())){
            temp.push(j);
            break;
          }
        }
      }
      this.classes = temp;
    }
  }

  searchByValueInSubjects(searchValue){
    console.log(searchValue.value);
    if(!searchValue.value){
      this.getAllSubjects();
    } else { 
      let temp = [];
      for(let j of this.subjects){
        for(var i of Object.values(j)){
          if((i.toString().replace(/ /g,'').toUpperCase()).includes(searchValue.value.toUpperCase())){
            temp.push(j);
            break;
          }
        }
      }
      this.subjects = temp;
    }
  }

  get subjectName(){ return this.form5.get('subjectName'); }

  get hallNo(){ return this.form5.get('hallNo'); }

  get grade(){ return this.form5.get('grade'); }

  get batch(){ return this.form5.get('batch'); }

  get date(){ return this.form5.get('date'); }

  get stream(){ return this.form5.get('stream'); }

  get time(){ return this.form5.get('time'); }

  get name(){ return this.form6.get('name'); }

  get level(){ return this.form6.get('level'); }

  get subjectStream(){ return this.form6.get('subjectStream'); }
}
