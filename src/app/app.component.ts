import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  courses = [
    { id: 1 , name: 'course1' },
    { id: 2 , name: 'course2' },
    { id: 3 , name: 'course3' }
  ];

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' })
  }

  onChange(course) {
    // let index = this.courses.indexOf(course);
    // this.courses.splice(index, 1);
    course.name = 'UPDATED';
  }

}