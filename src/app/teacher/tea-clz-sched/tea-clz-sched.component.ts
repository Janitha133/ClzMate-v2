import { Component, OnInit } from '@angular/core';
import { ClzService } from 'src/app/services/clz.service';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-tea-clz-sched',
  templateUrl: './tea-clz-sched.component.html',
  styleUrls: ['./tea-clz-sched.component.scss'],
  providers: [ClzService,LoginComponent]
})
export class TeaClzSchedComponent implements OnInit {

  token2 = localStorage.getItem('token');
  classes: any[] = [];
  matchId: any;
  decodeJWT2;

  constructor(
    private Clzes: ClzService,
    private lc: LoginComponent
  ) {
    this.decodeJWT2 = lc.getDecodedAccessToken(this.token2);
    this.matchId = this.decodeJWT2.user._id;
   }

  ngOnInit() {
    this.getAllClzes()
  }

  getAllClzes(){
    this.Clzes.getAllClzes()
      .subscribe(result => {
        this.classes = result.json().Clz;
        if(result.json()) console.log(result.json());
      })
  }

  searchByValueInClasses(searchValue:any){
    console.log(searchValue.value);
    if(!searchValue.value){
      this.getAllClzes();
    } else { 
      let temp = [];
      for(let j of this.classes){
        for(var i of Object.values(j)){
          if (i == null) {
            continue;
          }
          if((i.toString().replace(/ /g,'').toUpperCase()).includes(searchValue.value.toUpperCase())){
            temp.push(j);
            break;
          }
        }
      }
      this.classes = temp;
    }
  }

}
