import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
        `
})
export class CoursesComponent {
    onDivClicked() {
        console.log("Div was clicked");
    }
    onSave($event) {
        $event.stopPropagation();
        console.log('button was clicked', $event);
    }
}