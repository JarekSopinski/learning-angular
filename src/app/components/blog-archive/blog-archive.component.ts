import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-archive',
  templateUrl: './blog-archive.component.html',
  styleUrls: ['./blog-archive.component.scss']
})
export class BlogArchiveComponent implements OnInit {

  blogPosts:object[] = [
    { year: '2017', month: '1' },
    { year: '2017', month: '2' },
    { year: '2017', month: '3' }
  ]

  constructor() { }

  ngOnInit() {
  }

}