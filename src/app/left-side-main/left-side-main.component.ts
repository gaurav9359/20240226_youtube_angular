import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-side-main',
  standalone: true,
  imports: [],
  templateUrl: './left-side-main.component.html',
  styleUrl: './left-side-main.component.css'
})
export class LeftSideMainComponent {
  @Input() leftItems:Array<String>=[];
  constructor(){
    console.log(this.leftItems)
  }
}
