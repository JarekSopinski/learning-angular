import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'like-btn',
  template: `
    <div class="like-btn" [class.active]="isActive" (click)="onBtnClick()">
      <fa-icon [icon]="faHeart"></fa-icon>
      <span class="like-btn__counter">{{ likesCount }}</span>
    </div>
  `,
  styleUrls: ['./like-btn.component.scss']
})

export class LikeBtnComponent {

  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;
  @Output ('changeOnClick') changeOnClick = new EventEmitter();

  faHeart = faHeart;

  onBtnClick() {

    this.isActive = !this.isActive;
    this.likesCount = this.isActive ? 1 : 0;

    this.changeOnClick.emit({ 
      newActiveValue: this.isActive,
      newLikesCount: this.likesCount
    });

  }

}
