import { Component, OnInit } from '@angular/core';
import { SignalKService } from '../signal-k.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'wind-rose',
  templateUrl: './wind-rose.component.html',
  styleUrls: ['./wind-rose.component.css']
})
export class WindRoseComponent implements OnInit {
  windDirection$ = this.signalKService.filterByDatapoint$('environment_wind_directionTrue').pipe(
    map(v => `rotate(${(v?v:0)}deg)`)
  );

  constructor(private signalKService: SignalKService) {
  }

  ngOnInit() {
  }

}
