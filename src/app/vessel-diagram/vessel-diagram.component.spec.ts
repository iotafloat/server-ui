import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselDiagramComponent } from './vessel-diagram.component';

describe('VesselDiagramComponent', () => {
  let component: VesselDiagramComponent;
  let fixture: ComponentFixture<VesselDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesselDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
