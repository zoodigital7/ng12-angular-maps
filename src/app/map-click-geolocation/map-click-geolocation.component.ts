import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Marker } from './marker';

@Component({
  selector: 'app-map-click-geolocation',
  templateUrl: './map-click-geolocation.component.html',
  styleUrls: ['./map-click-geolocation.component.scss']
})
export class MapClickGeolocationComponent implements OnInit {
  @ViewChild('newMap', { static: false }) newMap: any
  @Input() inputLatLng: any
  zoom = 12
  marker: any
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    maxZoom: 21,
    minZoom: 15,
  }
  latitude = 37.0948
  longitude = -89.7754
  @Output() markerPosition: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.center = { lat: this.latitude, lng: this.longitude }
  }

  ngOnInit(): void {
    if (this.inputLatLng) {
      this.buildMarker(this.inputLatLng)
    }
  }

  buildMarker(latLng: any) {
    this.marker = new google.maps.Marker({})
    this.marker.lat = latLng.lat
    this.marker.lng = latLng.lng
    this.marker.position = latLng
    this.marker.options = { draggable: true }
  }

  setMarker(event: google.maps.MapMouseEvent) {
    const latLng = event.latLng.toJSON()
    this.buildMarker(latLng)
    this.markerPosition.emit(latLng)
  }

  setMarkerPositionAfterDragEnd(event: google.maps.MapMouseEvent) {
    const latLng = event.latLng.toJSON()
    this.markerPosition.emit(latLng)
  }

}
