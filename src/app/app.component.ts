import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  items = [
    { title: "Item1 title", content: "Item1 content" },
    { title: "Item2 title", content: "Item2 content" },
    { title: "Item3 title", content: "Item3 content" }
  ]

}