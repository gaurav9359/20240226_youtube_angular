import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommended-main',
  standalone: true,
  imports: [],
  templateUrl: './recommended-main.component.html',
  styleUrl: './recommended-main.component.css'
})
export class RecommendedMainComponent {
  // take input of all the recommended items from parent
  @Input() recommended: Array<String> = []
}
