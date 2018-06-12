import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { filter, flatMap, map } from "rxjs/operators";
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SignalKService {
  deltaMessages$ = webSocket<any>('ws://localhost:3000/signalk/v1/stream?subscribe=all');
  updates$ = this.deltaMessages$.pipe(
    filter(message=>'updates' in message),
    flatMap(message => message.updates),
    map((update:any) => ({timestamp:update.timestamp, source:update.source.deviceName, values:update.values[0].value, path:update.values[0].path}))
  )
}

