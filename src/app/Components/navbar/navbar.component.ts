import { Component, Input } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { DropDownSettingsComponent } from '../../drop-down-settings/drop-down-settings.component';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchBarComponent,DropDownSettingsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() profile:Array<String>=[]
}
