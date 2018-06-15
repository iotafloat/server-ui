import { Component } from '@angular/core';
import { SignalKService } from "../signal-k.service";
import { VesselDiagramComponent } from "../vessel-diagram/vessel-diagram.component";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  outsideTemperature$ = this.signalKService.filterByDatapoint$('environment/outside/temperature')
  outsideHumidity$ = this.signalKService.filterByDatapoint$('environment/outside/humidity')
  
  constructor(private signalKService:SignalKService){}

}

