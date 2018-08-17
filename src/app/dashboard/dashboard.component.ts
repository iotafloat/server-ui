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
  outsideTemperature$ = this.signalKService.filterByDatapoint$('environment_outside_temperature');
  outsideHumidity$ = this.signalKService.filterByDatapoint$('environment_outside_humidity');
  coolantTemperature$ = this.signalKService.filterByDatapoint$('propulsion_mainEngine_coolantTemperature');
  intakeManifoldTemperature$ = this.signalKService.filterByDatapoint$('propulsion_mainEngine_intakeManifoldTemperature');
  windDirectionTrue$ = this.signalKService.filterByDatapoint$('environment_wind_directionTrue');
  windSpeedApparent$ = this.signalKService.filterByDatapoint$('environment_wind_speedApparent');
  houseVoltage$ = this.signalKService.filterByDatapoint$('electrical_batteries_house_voltage');
  starterVoltage$ = this.signalKService.filterByDatapoint$('electrical_batteries_starter_voltage');
  houseTemperature$ = this.signalKService.filterByDatapoint$('electrical_batteries_house_current');
  starterTemperature$ = this.signalKService.filterByDatapoint$('electrical_batteries_starter_current');
  houseCurrent$ = this.signalKService.filterByDatapoint$('electrical_batteries_house_temperature');
  starterCurrent$ = this.signalKService.filterByDatapoint$('electrical_batteries_starter_temperature');
  engineInsideTemperature$ = this.signalKService.filterByDatapoint$('environment_inside_temperature');
  speedOverGround$ = this.signalKService.filterByDatapoint$('navigation.speedOverGround');

  constructor(private signalKService: SignalKService) { }

}

