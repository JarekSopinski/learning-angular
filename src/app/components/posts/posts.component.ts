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
        response => {
          for (const property in response) {
            // temporary fix becuase tut is based on using array...
            this.posts.push(response[property])
          }
        }
      )
  }

  create(input: HTMLInputElement) {
    let post:object = { title: input.value };
    input.value = '';
    this.service.create(post)
      .subscribe(
        response => {
          console.log(response);
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        }
      )
  }

  update(post) {
    this.service.update(post)
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }

  delete(post) {
    this.service.delete(post.id)
      .subscribe(
        response => {
          console.log(response);
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
      }, 
        (error: AppError) => {
          if (error instanceof NotFoundError){
            alert('This post has already been deleted')
          } else {
            throw error;
          }
        }
      )
  }

}