import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapClickGeolocationComponent } from './map-click-geolocation.component';

describe('MapClickGeolocationComponent', () => {
  let component: MapClickGeolocationComponent;
  let fixture: ComponentFixture<MapClickGeolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapClickGeolocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapClickGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
