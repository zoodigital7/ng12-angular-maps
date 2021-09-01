import { Component, Input, OnInit } from '@angular/core';
import { MapDirectionsService } from '@angular/google-maps';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-directions-map',
  templateUrl: './directions-map.component.html',
  styleUrls: ['./directions-map.component.scss']
})
export class DirectionsMapComponent implements OnInit {
  @Input() origin!: any
  @Input() destination!: any
  enteredOrigin!: any
  enteredDestination!: any
  zoom = 12
  center!: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    maxZoom: 21,
    minZoom: 12,
  }
  showAddressInputs = false
  directionsResults$!: Observable<google.maps.DirectionsResult|undefined>
  constructor(
    private directionsService: MapDirectionsService
  ) { }

  ngOnInit(): void {
    if (this.origin && this.destination) {
      this.center = { lat: this.destination.lat, lng: this.destination.lng }
      this.getDirections(this.origin, this.destination)
    } else {
      this.showAddressInputs = true
    }
  }

  setEnteredOrigin(event: any)  {
    debugger
    this.enteredOrigin = event
  }

  setEnteredDestination(event: any)  {
    this.enteredDestination = event
  }

  closeAddressInputsAndGetDirections() {
    if (this.enteredOrigin && this.enteredDestination) {
      this.showAddressInputs = false
      this.center = { lat: this.enteredDestination.lat, lng: this.enteredDestination.lng }
      this.getDirections(this.enteredOrigin, this.enteredDestination)
    } else {
      alert('Origin and/or Destination Not Entered')
    }
  }

  getDirections(origin: any, dest: any) {
    const request: google.maps.DirectionsRequest = {
      destination: dest,
      origin: origin,
      travelMode: google.maps.TravelMode.DRIVING
    }
    this.directionsResults$ = this.directionsService.route(request).pipe(map(response => response.result))
  }

}
