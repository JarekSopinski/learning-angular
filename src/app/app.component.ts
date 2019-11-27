import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  }

  post = {
    title: "Title",
    isFavorite: true
  }

  updateTweetObjectOnBtnClick(eventArgs){
    this.tweet.isLiked = eventArgs.newActiveValue;
    this.tweet.likesCount = eventArgs.newLikesCount;
  }

}