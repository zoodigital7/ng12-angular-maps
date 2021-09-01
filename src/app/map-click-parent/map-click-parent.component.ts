import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-click-parent',
  templateUrl: './map-click-parent.component.html',
  styleUrls: ['./map-click-parent.component.scss']
})
export class MapClickParentComponent implements OnInit {
  inputLatLng: any
  outputLatLng: any
  constructor() {
    this.inputLatLng = { 'lat': 37.12518639752359, 'lng': -89.75793368539736 }
   }

  ngOnInit(): void {
  }

  setLatLng() {

  }

  setMarkerLatLng(event: any) {
    this.outputLatLng = event
  }

}
