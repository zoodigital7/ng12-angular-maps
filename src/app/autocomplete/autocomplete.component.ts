import { Component, ElementRef, NgZone, OnInit, Output, ViewChild, EventEmitter, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
  @Input() outputAddress: boolean = false
  @Input() origin: boolean = false
  @Input() destination: boolean = false
  @ViewChild('addressInput', { static: true }) addressInput!: ElementRef
  @ViewChild('addressInputDirections', { static: true }) addressInputDirections!: ElementRef
  latitude!: number
  longitude!: number
  address!: string
  @Output() addressEntered: EventEmitter<any> = new EventEmitter();
  private geoCoder: any
  constructor(
    private ngZone: NgZone
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initAutocomplete()
  }

  initAutocomplete() {
    this.geoCoder = new google.maps.Geocoder
    let autocomplete = new google.maps.places.Autocomplete(this.addressInput.nativeElement)
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace()
        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
        //set latitude, longitude and zoom
        this.latitude = place.geometry.location.lat()
        this.longitude = place.geometry.location.lng()
        this.getAddress(this.latitude, this.longitude)
      })
    })
  }

  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: any, status: any) => {
      console.log(results)
      console.log(status)
      if (status === 'OK') {
        if (results[0]) {
          this.address = results[0].formatted_address
          if (this.outputAddress) {
            const addy = {
              address: this.address,
              lat: latitude,
              lng: longitude
            }
            this.addressEntered.emit(addy)
          }
        } else {
          window.alert('No results found')
        }
      } else {
        window.alert('Geocoder failed due to: ' + status)
      }
    })
  }


}
