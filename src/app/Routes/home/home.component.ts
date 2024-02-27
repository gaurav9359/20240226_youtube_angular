import { Component, OnInit } from '@angular/core';
import { MiddleMainComponent } from '../../Components/middle-main/middle-main.component';
import { MyvideoDetails } from '../../interfaces';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MiddleMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  videoData: Array<MyvideoDetails> = []

  constructor(private dataService: DataService) { }

  // Subscribing to the data when Initialized.
  ngOnInit(): void {
    this.dataService.videoData$.subscribe(videoData => {
      this.videoData = videoData
    })
  }
}
