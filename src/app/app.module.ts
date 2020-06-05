import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';

import { SummaryPipe } from './pipes/summary.pipe';
import { FormatTitle } from './pipes/format-title.pipe';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { MovieTitleComponent } from './components/movie-title/movie-title.component';
import { PanelComponent } from './components/panel/panel.component';
import { LikeBtnComponent } from './components/like-btn/like-btn.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    SummaryPipe,
    FormatTitle,
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    MovieTitleComponent,
    PanelComponent,
    LikeBtnComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
