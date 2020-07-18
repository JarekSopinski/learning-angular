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

export class DataService {

  constructor(
      private url: string,
      private http: HttpClient
      ) { }

  getAll() {
    return this.http.get(this.url).pipe(
      map(data => { return data; }),
      catchError(this.handleError)
    )
  }

  create(resource: object) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map(data => { return data; }),
      catchError(this.handleError)
    )
  }

  update(resource) {
    const changedResourceUrl:string = `${this.url}/${resource.id}`;
    return this.http.patch(changedResourceUrl, JSON.stringify({ isRead: true })).pipe(
      map(data => { return data; }),
      catchError(this.handleError)
    )
  }

  delete(id: number) {
    const deletedResourceUrl:string = `${this.url}/${id}`;
    return this.http.delete(deletedResourceUrl).pipe(
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
