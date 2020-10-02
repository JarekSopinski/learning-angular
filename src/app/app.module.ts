import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';
import { PostService } from './services/post.service';
import { FollowersService } from './services/followers.service';

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
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './components/followers/followers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlogArchiveComponent } from './components/blog-archive/blog-archive.component';
import { BlogSingleArchiveComponent } from './components/blog-single-archive/blog-single-archive.component';

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
    NewCourseFormComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    FollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    BlogArchiveComponent,
    BlogSingleArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: BlogArchiveComponent 
      },
      {
        path: 'archive',
        component: BlogArchiveComponent
      },
      {
        path: 'archive/:year/:month',
        component: BlogSingleArchiveComponent
      },
      { 
        path: 'followers/:id/:username', 
        component: GithubProfileComponent 
      },
      { 
        path: 'followers', 
        component: FollowersComponent 
      },
      { 
        path: 'posts', 
        component: PostsComponent
      },
      { 
        path: '**', 
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    FollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
