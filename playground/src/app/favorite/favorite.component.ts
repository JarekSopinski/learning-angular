import { Component, OnInit } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  template: `
    <fa-icon (click)=onStarClick() [icon]="isFavorite ? fasStar : farStar"></fa-icon>
  `
})
export class FavoriteComponent implements OnInit {

  isFavorite = false;
  fasStar = fasStar;
  farStar = farStar;

  constructor() { }

  onStarClick() {
    this.isFavorite ? this.isFavorite = false : this.isFavorite = true;
  }

  ngOnInit() {
  }

}
