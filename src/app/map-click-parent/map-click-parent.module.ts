import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapClickParentComponent } from './map-click-parent.component';
import { MapClickGeolocationModule } from '../map-click-geolocation/map-click-geolocation.module';
import { MapClickParentRoutingModule } from './map-click-parent-routing.module';



@NgModule({
  declarations: [
    MapClickParentComponent
  ],
  imports: [
    CommonModule,
    MapClickParentRoutingModule,
    MapClickGeolocationModule
  ]
})
export class MapClickParentModule { }
