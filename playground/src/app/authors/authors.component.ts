import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
})
export class AuthorsComponent implements OnInit {

  title = "Authors";
  authors;
  authorsCount;

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
    this.authorsCount = service.getAuthorsCount();
  }

  ngOnInit() {
  }

}