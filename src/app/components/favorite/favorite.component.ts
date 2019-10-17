import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  template: `
    <fa-icon (click)=onStarClick() [icon]="isSelected ? fasStar : farStar"></fa-icon>
  `,
  styleUrls: ['./favorite.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {

  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  fasStar = fasStar;
  farStar = farStar;

  onStarClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}