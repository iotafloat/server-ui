import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCabinDoorComponent } from './smart-cabin-door.component';

describe('SmartCabinDoorComponent', () => {
  let component: SmartCabinDoorComponent;
  let fixture: ComponentFixture<SmartCabinDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCabinDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCabinDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
