import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-regst',
  templateUrl: './admin-regst.component.html',
  styleUrls: ['./admin-regst.component.scss']
})
export class AdminRegstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  viewMode = 'student';
}
