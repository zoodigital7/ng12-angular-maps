import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectionsMapComponent } from './directions-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { DirectionsMapRoutingModule } from './directions-map-routing.module';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';



@NgModule({
  declarations: [
    DirectionsMapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    DirectionsMapRoutingModule,
    AutocompleteModule
  ],
  exports: [
    DirectionsMapComponent
  ]
})
export class DirectionsMapModule { }
