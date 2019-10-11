import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-title',
  template: `
    <input [(ngModel)]="title" (keyup.enter)="formatTitleOnInput()" />
    <br />
    <p>{{ title | formatTitle }}</p>
  `
})
export class MovieTitleComponent implements OnInit {

  title: string = 'FORMATTED TITLE WILL BE DISPLAYED HERE';

  constructor() { }

  ngOnInit() {
  }

  formatTitleOnInput() {
    console.log(this.title);
  }

}
