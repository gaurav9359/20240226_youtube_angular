import { Component, Input} from '@angular/core';
import { MyvideoDetails } from '../../interfaces';

@Component({
  selector: 'app-middle-main',
  standalone: true,
  imports: [],
  templateUrl: './middle-main.component.html',
  styleUrl: './middle-main.component.css'
})
export class MiddleMainComponent {
  // input the array of video list from parent and route
  @Input() videoData: Array<MyvideoDetails> = []
}
