import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
  }

  logBtnOff(){
    if(this.router.url === "/"){
      console.log("false");  
      return false;
    }
    console.log("true");
    return true;
}
  

}
