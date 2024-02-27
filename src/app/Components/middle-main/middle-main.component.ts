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
  @Input() videoData: Array<MyvideoDetails> = []
}
