import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        `
})
export class CoursesComponent {
    isActive = false;
}