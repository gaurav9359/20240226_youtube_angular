import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSideMainComponent } from './left-side-main/left-side-main.component';
import { MiddleMainComponent } from './middle-main/middle-main.component';
import { RecommendedMainComponent } from './recommended-main/recommended-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,LeftSideMainComponent,MiddleMainComponent,RecommendedMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '20240226_youtube_angular';

  leftItems: Array<String>=["Home","Shorts", "Subscriptions", "You"];

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
