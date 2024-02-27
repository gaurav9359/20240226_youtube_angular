import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-side-main',
  standalone: true,
  imports: [],
  templateUrl: './left-side-main.component.html',
  styleUrl: './left-side-main.component.css'
})
export class LeftSideMainComponent {

  // input the sections present from backend
  @Input() leftItems:Array<String>=[];
}
