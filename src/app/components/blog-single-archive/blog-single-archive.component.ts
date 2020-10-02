import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-single-archive',
  templateUrl: './blog-single-archive.component.html',
  styleUrls: ['./blog-single-archive.component.scss']
})
export class BlogSingleArchiveComponent implements OnInit {

  year:string;
  month:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.route.paramMap
      .subscribe(params => {
        this.year = params.get('year');
        this.month = params.get('month');
      })

  }

  redirectToArchives() {
    this.router.navigate(['/archive']);
  }

}
