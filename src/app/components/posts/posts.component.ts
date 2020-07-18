import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadInput } from 'src/app/common/bad-input';

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
    this.service.getAll()
      .subscribe(
        newPosts => {
          for (const property in newPosts) {
            // temporary fix becuase tut is based on using array...
            this.posts.push(newPosts[property])
          }
        }
      )
  }

  createPost(input: HTMLInputElement) {
    // optimistic approach: add post in browser without waiting for server response
    let post:object = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = ''; // clear input

    this.service.create(post)
      .subscribe(
        createdPost => {
          console.log(createdPost);
          post['id'] = createdPost['id'];
        }, 
        (error: AppError) => {
          this.posts.splice(0, 1); // in case of error, roll back from adding post
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        }
      )

  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => console.log(updatedPost)
      )
  }

  deletePost(post) {
    // optimistic approach: remove post in browser without waiting for server response
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null, 
        (error: AppError) => { 
          this.posts.splice(0, 0, post); // in case of server error, add removed post again
          if (error instanceof NotFoundError){
            alert('This post has already been deleted')
          } else {
            throw error;
          }
        }
      )
  }

}