import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  followers:any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService
    ) { }

  ngOnInit() {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])

    .pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        return this.service.getAll();
      })
    )

    .subscribe( newFollowers => {
      for (const property in newFollowers) {
        this.followers.push(newFollowers[property]);
      }
    })

  }

}
