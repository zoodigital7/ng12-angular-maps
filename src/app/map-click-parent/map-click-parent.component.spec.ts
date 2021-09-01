import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapClickParentComponent } from './map-click-parent.component';

describe('MapClickParentComponent', () => {
  let component: MapClickParentComponent;
  let fixture: ComponentFixture<MapClickParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapClickParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapClickParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
