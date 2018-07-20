import { Component } from '@angular/core';
import { SignalKService } from "../signal-k.service";
import { WindRoseComponent } from "../wind-rose/wind-rose.component";
import { VesselDiagramComponent } from "../vessel-diagram/vessel-diagram.component";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  outsideTemperature$ = this.signalKService.filterByDatapoint$('environment/outside/temperature');
  outsideHumidity$ = this.signalKService.filterByDatapoint$('environment/outside/humidity');
  coolantTemperature$ =this.signalKService.filterByDatapoint$('propulsion/mainEngine/coolantTemperature');
  intakeManifoldTemperature$=this.signalKService.filterByDatapoint$('propulsion/mainEngine/intakeManifoldTemperature');
  windDirectionTrue$=this.signalKService.filterByDatapoint$('environment/wind/directionTrue');
  windSpeedApparent$=this.signalKService.filterByDatapoint$('environment/wind/speedApparent');
  houseVoltage$=this.signalKService.filterByDatapoint$('electrical/batteries/house/voltage');
  starterVoltage$=this.signalKService.filterByDatapoint$('electrical/batteries/starter/voltage');
  houseTemperature$=this.signalKService.filterByDatapoint$('electrical/batteries/house/current');
  starterTemperature$=this.signalKService.filterByDatapoint$('electrical/batteries/starter/current');
  houseCurrent$=this.signalKService.filterByDatapoint$('electrical/batteries/house/temperature');
  starterCurrent$=this.signalKService.filterByDatapoint$('electrical/batteries/starter/temperature');
  engineInsideTemperature$=this.signalKService.filterByDatapoint$('environment/inside/temperature');
  speedOverGround$=this.signalKService.filterByDatapoint$('navigation.speedOverGround');

  constructor(private signalKService:SignalKService){}

}

