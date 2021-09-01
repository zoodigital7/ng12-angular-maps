import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    AutocompleteRoutingModule
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class AutocompleteModule { }
