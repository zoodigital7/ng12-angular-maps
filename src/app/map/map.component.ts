import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { TestMarkers } from './test-markers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('newMap', { static: false }) newMap: any
  zoom = 15
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    maxZoom: 21,
    minZoom: 15,
  }
  latitude = 37.0948;
  longitude = -89.7754;
  markers = TestMarkers
  mapCircles: any[] = []
  mapLines: any[] =[]
  constructor() {
    this.center = { lat: this.latitude, lng: this.longitude }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.newMap) {
      this.fitBoundsForMarkers()
    }
  }

  fitBoundsForMarkers() {
    var bounds = new google.maps.LatLngBounds()
    this.markers.forEach(x => {
      bounds.extend({lat: +x.lat, lng: +x.lng})
    })
    this.newMap.fitBounds(bounds)

    const marker = this.markers[0]
    const newCircle = new google.maps.Circle({
      map: this.newMap,
      radius: 0.5,
      fillColor: '#60b922',
      center: {lat: +marker.lat, lng: +marker.lng}
    })
    this.mapCircles.push(newCircle)
    newCircle.setOptions({ fillColor: '#60b922', strokeColor: ' #60b922'})
    const endCircle = new google.maps.Circle({
      map: this.newMap,
      radius: 0.5,
      fillColor: '#60b922',
      center: {lat: ((+marker.lat + .00035)), lng: ((+marker.lng + 0.00035)) }
    })
    this.mapCircles.push(endCircle)
    const vertices = [
      // {lat: ((+marker.lat - .00035)), lng: ((+marker.lng - 0.00035))},
      {lat: +marker.lat, lng: +marker.lng},
      {lat: ((+marker.lat + .00035)), lng: ((+marker.lng + 0.00035))},
    ];
    const polyLine = {
      path: vertices
    }

    this.mapLines.push(polyLine)
    this.markers = this.markers.filter((x, index) => index !== 0)
    debugger
  }

  setSelectedAsset(asset: any) {
    console.log(asset)
  }

}
