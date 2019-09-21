import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the homepage...";
  myString = "Sky is blue";
  myBoolean = true;

  alertMe(val){
    alert(val);
  }

  constructor() { }

  ngOnInit() {
  }

}
