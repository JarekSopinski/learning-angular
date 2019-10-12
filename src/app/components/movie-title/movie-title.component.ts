import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-title',
  template: `
    <input [(ngModel)]="title" />
    <br />
    <p>{{ title | formatTitle }}</p>
  `
})
export class MovieTitleComponent implements OnInit {

  title: string = 'THE RISE OF THE PLANET OF THE APES';

  constructor() { }

  ngOnInit() {
  }

}