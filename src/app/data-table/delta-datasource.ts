import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { SignalKService } from "../signal-k.service";


export class DeltaDataSource extends DataSource<any> {
  updatesArray: any[]=[];
  updates$: Subject<any[]> = new Subject<any[]>();

  constructor(private signalKService: SignalKService) {
    super();
    this.signalKService.updates$.subscribe((d:any) => {
      this.updatesArray.push(d);
      this.updates$.next(this.updatesArray);
    });
  }

  connect(): Observable<any[]> {
    return this.updates$;
  }

  disconnect() { }

}

