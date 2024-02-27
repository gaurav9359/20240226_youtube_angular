import { Component , Input} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-drop-down-settings',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './drop-down-settings.component.html',
  styleUrl: './drop-down-settings.component.css'
})
export class DropDownSettingsComponent {
  @Input() profile:Array<String>=[]
}
