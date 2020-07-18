import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    const changedPostUrl:string = `${this.url}/${post.id}`;
    return this.http.patch(changedPostUrl, JSON.stringify({ isRead: true }));
  }

  deletePost(id: number) {
    const deletedPostUrl:string = `${this.url}/${id}`;
    return this.http.delete(deletedPostUrl);
  }

}
