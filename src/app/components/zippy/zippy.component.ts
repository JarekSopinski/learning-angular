import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {

  @Input('zippy-items') zippyItems: object[];

  openedItem: number;

  constructor() { }

  onItemTopClick(i) {
    this.openedItem = i;
  }

}
