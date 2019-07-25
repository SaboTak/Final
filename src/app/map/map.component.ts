/// <reference types="@types/googlemaps" />

import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {  } from "googlemaps";
import { MapsAPILoader } from '@agm/core';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;


  public zoom: number;
  public latitude: number;
  public longitude: number;
  public latlongs: any = [];
  public latlong: any = {};
  public searchControl: FormControl;


  constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZOne: NgZone
  ) {

   }

  ngOnInit() {
      this.zoom= 8;
      this.latitude= 10.9878;
      this.longitude= -74.7889;

      this.searchControl= new FormControl();
      this.setCurrentPosition();
      this.mapsAPILoader.load().then(()=>{
          const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement,{
            types: [],
            componentRestrictions: {'country': 'CO'}
          });

          autocomplete.addListener('place_canged',()=>{
              this.ngZOne.run(() => {
                const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                if (place.geometry === undefined || place.geometry === null){
                    return;
                }
                
                const latlong = {
                    latitude: place.geometry.location.lat(),
                    longitude: place.geometry.location.lng()
                };
                this.latlongs.push(latlong);
                this.searchControl.reset();
              });
          });
      });
  }
  private setCurrentPosition(){
      if('geolocation' in navigator){
          navigator.geolocation.getCurrentPosition((position) => {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
              this.zoom = 8;
          });
      }
  }
}
