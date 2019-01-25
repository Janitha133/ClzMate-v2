import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paper-maker-sidebar',
  templateUrl: './paper-maker-sidebar.component.html',
  styleUrls: ['./paper-maker-sidebar.component.scss']
})
export class PaperMakerSidebarComponent implements OnInit {

  decodeJWT;
  UserName = '';
  UserEmail = '';
  imageURL = '../../../assets/nobody_m.original.jpg';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
