import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  posts:any[] = [];

  constructor(private service: PostService){
  }

  ngOnInit() {
    this.service.getPosts()
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
    this.service.createPost(post)
      .subscribe(response => {
        console.log(response);
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
      })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }

}