import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LeftSideMainComponent } from './Components/left-side-main/left-side-main.component';
import { MiddleMainComponent } from './Components/middle-main/middle-main.component';
import { RecommendedMainComponent } from './Components/recommended-main/recommended-main.component';
import { DataService } from './data.service';
import { MyvideoDetails } from './interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,LeftSideMainComponent,MiddleMainComponent,RecommendedMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private dataService: DataService) { }

  

  videoData:Array<MyvideoDetails> = []

  ngOnInit(): void {
    this.videoData = [
      {
        thumbnailUrl: "https://i.ytimg.com/vi/LmcWMjBpYBU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn6XgWOGK71RQpQsObLFUeYfeCIQ",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: true
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/rnfVNYvef5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ9EUQ9fAUK7qP92CUlkEzFo72hQ",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: false
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/YXErzl-cIe8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBy-U3O66ggitJCbXh2K0A7Cy9N9g",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: true
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/6Pf6RUmq7S0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA57j0S-g5T5YTM1TvKhBJb6gDgvA",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: false
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/7JXkKVA5RAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXviFVE1V61Njd80U2GO0biUSkiA",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: true
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/0HO4KaRF5KI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv1lasoPu-bjQIw8bNg-9DaolglA",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: false
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/LmcWMjBpYBU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn6XgWOGK71RQpQsObLFUeYfeCIQ",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: true
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/rnfVNYvef5g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ9EUQ9fAUK7qP92CUlkEzFo72hQ",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: false
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/YXErzl-cIe8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBy-U3O66ggitJCbXh2K0A7Cy9N9g",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: true
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/6Pf6RUmq7S0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA57j0S-g5T5YTM1TvKhBJb6gDgvA",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: false
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/7JXkKVA5RAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXviFVE1V61Njd80U2GO0biUSkiA",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: true
      },
      {
        thumbnailUrl: "https://i.ytimg.com/vi/0HO4KaRF5KI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv1lasoPu-bjQIw8bNg-9DaolglA",
        videoTitle: "Coding challenge 180: Falling Sand",
        creatorName: "The Coding Train",
        views: "29.2M views",
        uploadDate: "1 month ago",
        isSubscribed: false
      },
    ]

    // Setting the data
    this.dataService.setData(this.videoData)
  }

  leftItems: Array<String>=["Home","Shorts", "Subscriptions", "You"];

  profile: Array<String>= [`https://yt3.ggpht.com/ytc/AIf8zZSGHcHDceDumNFoKq-txbR5dJiclKQFhe3rW_qBJajW3Iq3faioCFrfzuIxvMbd=s88-c-k-c0x00ffffff-no-rj`]

  recommended: Array<String> = [
    'News',
    'Music',
    'Mixes',
    'Gadgets',
    'Tamil Cinema',
    'Dramedy',
    'Live',
    'Sketch Comedy',
    'Gaming',
    'Computer Programming',
    'Trailer',
    'Lo-fi',
    'Lectures',
    'Beauty'
  ]
}
