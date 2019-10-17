import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  template: `
    <fa-icon (click)=onStarClick() [icon]="isFavorite ? fasStar : farStar"></fa-icon>
  `
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  fasStar = fasStar;
  farStar = farStar;

  constructor() { }

  onStarClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }

  ngOnInit() {
  }

}
