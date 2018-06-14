import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { filter, flatMap, map } from "rxjs/operators";
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SignalKService {
  deltaMessages$ = webSocket<any>('ws://localhost:3000/signalk/v1/stream?subscribe=all');
  updates$:Observable<Update> = this.deltaMessages$.pipe(
    filter(message => 'updates' in message),
    flatMap(message => message.updates),
    map((update: any):Update => ({ timestamp: update.timestamp, deviceName: update.source.deviceName, values:update.values[0].value, path:update.values[0].path }))
  )

  filterByDatapoint$(datapoint:string) {
    return this.updates$.pipe(
        filter(u => u.path == datapoint),
        map(u => u.values)
      )
  }
}


export interface Update {
  timestamp:string,
  deviceName:string,
  values:string,
  path:string
}
