import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../../services/followers.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  followers:any[] = [];

  constructor(private service: FollowersService) { }

  ngOnInit() {
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
