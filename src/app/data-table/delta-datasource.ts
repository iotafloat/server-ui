import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { SignalKService } from "../signal-k.service";

// TODO: Replace this with your own data model type
export interface DeltaMessage {
  body: string;
}

export class DeltaDataSource extends DataSource<DeltaMessage> {
  deltaMessages: DeltaMessage[] = [{ body: "one" }];
  deltaMessages$: Subject<DeltaMessage[]> = new Subject<DeltaMessage[]>();

  constructor(private signalKService: SignalKService) {
    super();
    this.signalKService.deltaMessages$.subscribe(d => {
      this.deltaMessages.push(d);
      this.deltaMessages$.next(this.deltaMessages);
    });
  }

  connect(): Observable<DeltaMessage[]> {
    return this.deltaMessages$;
  }

  disconnect() { }

}

