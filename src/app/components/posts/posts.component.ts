import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent {

  posts:any[] = [];
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient){
    http.get(this.url)
      .subscribe(response => {
        for (const property in response) {
          // temporary fix becuase tut is based on using array...
          this.posts.push(response[property])
        }
      })
  }

  createPost(input: HTMLInputElement) {
    let post:object = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        console.log(response);
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
      })

  }

}
