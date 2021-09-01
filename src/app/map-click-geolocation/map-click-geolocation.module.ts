import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapClickGeolocationComponent } from './map-click-geolocation.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapClickGeolocationRoutingModule } from './map-click-geolocation-routing.module';



@NgModule({
  declarations: [
    MapClickGeolocationComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    MapClickGeolocationRoutingModule
  ], exports: [
    MapClickGeolocationComponent
  ]
})
export class MapClickGeolocationModule { }
