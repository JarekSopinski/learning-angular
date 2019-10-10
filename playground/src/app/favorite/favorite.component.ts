import { Component, OnInit } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  template: `
    <fa-icon (click)=onStarClick() [icon]="faStar"></fa-icon>
  `
})
export class FavoriteComponent implements OnInit {

  faStar = farStar;

  constructor() { }

  onStarClick() {
    this.faStar === farStar ?
      this.faStar = fasStar // turn on solid (fav)
      :
      this.faStar = farStar; // turn on regular (non-fav)
  }

  ngOnInit() {
  }

}
