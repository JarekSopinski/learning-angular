import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url).pipe(
      map(data => { return data; }),
      catchError(this.handleError)
    )
  }

  createPost(post: object) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      map(data => { return data; }),
      catchError(this.handleError)
    )
  }

  updatePost(post) {
    const changedPostUrl:string = `${this.url}/${post.id}`;
    return this.http.patch(changedPostUrl, JSON.stringify({ isRead: true })).pipe(
      map(data => { return data; }),
      catchError(this.handleError)
    )
  }

  deletePost(id: number) {
    const deletedPostUrl:string = `${this.url}/${id}`;
    return this.http.delete(deletedPostUrl).pipe(
      map(data => { return data; }),
      catchError(this.handleError)
    )
  }

  private handleError(error: Response) {
    switch(error.status){
      case (404): return throwError(new NotFoundError());
      case (400): return throwError(new BadInput(error));
      default: return throwError(new AppError(error));
    }
  }

}
