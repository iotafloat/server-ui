import { Component, OnInit } from '@angular/core';
import { SignalKService } from '../signal-k.service';

@Component({
  selector: 'app-wind-rose',
  templateUrl: './wind-rose.component.html',
  styleUrls: ['./wind-rose.component.css']
})
export class WindRoseComponent implements OnInit {

  constructor(private signalKService: SignalKService) {
    
    this.signalKService.up

  }

  ngOnInit() {
  }

}
