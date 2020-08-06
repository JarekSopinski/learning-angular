import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../../services/followers.service';
import { ActivatedRoute } from '@angular/router';

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

    this.route.paramMap.subscribe();
    this.route.snapshot.paramMap.get('id');

    this.route.queryParamMap.subscribe();
    this.route.snapshot.queryParamMap.get('page');

    this.service.getAll()
      .subscribe(
        newFollowers => {
          for (const property in newFollowers) {
            this.followers.push(newFollowers[property]);
          }
        }
      )

  }

}
