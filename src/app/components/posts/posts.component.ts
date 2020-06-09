import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent {

  posts: object;

  constructor(http: HttpClient) {
    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response;
      })
  }

}
