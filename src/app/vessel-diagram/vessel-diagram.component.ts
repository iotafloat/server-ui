import { Component, OnInit, ElementRef } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'vessel-diagram',
  templateUrl: './vessel-diagram.component.html',
  styleUrls: ['./vessel-diagram.component.css']
})
export class VesselDiagramComponent implements OnInit {
  isAlert: boolean = true;

  public get currentClasses(): {} {
    return {
      alert: this.isAlert
    }
  }

  constructor(private host: ElementRef) { }

  ngOnInit() {
    let steps = [
      () => {
        this.host.nativeElement.querySelector('#devices #rpz-masthead').classList.add('good');
      },
      () => {
        this.host.nativeElement.querySelector('#devices #rpz-master').classList.add('good');
      },
      () => {
        this.host.nativeElement.querySelector('#devices #rpz-cockpit').classList.add('good');
        this.host.nativeElement.querySelector('#zones #galley').classList.add('alert');
      },
      () => {
        this.host.nativeElement.querySelector('#devices #rpz-aftport').classList.add('good');
      },
      () => {
        this.host.nativeElement.querySelector('#devices #rpz-aftstar').classList.add('good');
      },
      () => {
        this.host.nativeElement.querySelector('#devices #rpz-cabin').classList.add('good');
        this.host.nativeElement.querySelector('#zones #galley').classList.add('good');
      },
      () => {
        this.host.nativeElement.querySelector('#devices #rpz-engine').classList.add('alert');
        this.host.nativeElement.querySelector('#zones #galley').classList.remove('good');
      },
    ];

    let i = 0;
    setInterval(() => {
          steps[i]();
          i = ((i < steps.length - 1) ? i + 1 : 0 ); //increment or restart
    }, 1000);

  }

  delay(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
  }

}
