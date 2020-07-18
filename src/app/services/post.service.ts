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
    return this.http.get(this.url);
  }

  createPost(post: object) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      map (data => {
        return data;
      }),
      catchError((error: Response) => {
        if (error.status === 400) {
          return throwError(new BadInput(error));
        }
        return throwError(new AppError(error));
      })
    )
  }

  updatePost(post) {
    const changedPostUrl:string = `${this.url}/${post.id}`;
    return this.http.patch(changedPostUrl, JSON.stringify({ isRead: true }));
  }

  deletePost(id: number) {
    const deletedPostUrl:string = `${this.url}/${id}`;
    return this.http.delete(deletedPostUrl).pipe(
      map(data => {
        return data;
      }),
      catchError((error: Response) => {
        if (error.status === 404){
          return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
      })
    )
  }

}
