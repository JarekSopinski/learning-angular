import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'like-btn',
  template: `
    <div class="like-btn" 
      [class.highlighted]="isActive" 
      (click)="onClick()"
      >
      <fa-icon [icon]="faHeart"></fa-icon>
      <span class="like-btn__counter">{{ likesCount }}</span>
    </div>
  `,
  styleUrls: ['./like-btn.component.scss']
})

export class LikeBtnComponent {

  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;

  faHeart = faHeart;

  onClick() {

    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? +1 : -1;

  }

}
