import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    GoogleMapsModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
