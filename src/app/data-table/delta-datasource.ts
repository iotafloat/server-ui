import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { SignalKService, Update } from "../signal-k.service";


export class DeltaDataSource extends DataSource<any> {
  updates$: Observable<Update[]> = this.signalKService.updates$.pipe(
    scan<Update>((x, value) => [...x, value],[])
  )

  constructor(private signalKService: SignalKService) {
    super();
  }

  connect(): Observable<any[]> {
    return this.updates$;
  }

  disconnect() { }

}

