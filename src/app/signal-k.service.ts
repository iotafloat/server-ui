import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { filter, flatMap, map, scan } from "rxjs/operators";
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SignalKService {
  deltaMessages$ = webSocket<any>('ws://localhost:3000/signalk/v1/stream?subscribe=all');
  updates$:Observable<Update> = this.deltaMessages$.pipe(
    filter(message => 'updates' in message),
    flatMap(message => message.updates),
    map((update: any):Update => ({ timestamp: update.timestamp, deviceName: update.source.deviceName, values: JSON.stringify(update.values) }))
  )
}

export interface Update {
  timestamp:string,
  deviceName:string,
  values:string
}