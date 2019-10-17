import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  template: `
    <fa-icon (click)=onStarClick() [icon]="isSelected ? fasStar : farStar"></fa-icon>
  `
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter();

  fasStar = fasStar;
  farStar = farStar;

  constructor() { }

  onStarClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }

  ngOnInit() {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}