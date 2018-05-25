import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface DeltaMessage {
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignalKService {

  deltaMessages$:Subject<DeltaMessage> = new Subject<DeltaMessage>();

  constructor() {
    setInterval(() => {
      this.deltaMessages$.next({ body: Math.random().toString() });
    }, 2000);
  }
}
