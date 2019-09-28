import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'nn-tut';
  name = 'jarek';
  ninja = {
    name: "Ryu",
    belt: "Red"
  };

  yell(e){
    alert("I'm yelling");
  }

}
