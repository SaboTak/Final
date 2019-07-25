/// <reference types="@types/googlemaps" />
import { Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { Incidencia } from "../../interfaces/incidencia";
import { IncidenciaService } from "../../services/incidencia.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import {  } from "googlemaps";



@Component({
  selector: 'app-incidencia-form',
  templateUrl: './incidencia-form.component.html',
  styleUrls: ['./incidencia-form.component.css']
})
export class IncidenciaFormComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public ubicacion: FormControl;
  public zoom: number;
  
  @ViewChild("search",{static: false})
  public searchElementRef: ElementRef;

  incidencia : Incidencia = {
    ubicacion: '',
    producto: '',

  };

  constructor(
    private incidenciaService: IncidenciaService,
    private router: Router,
    private activateroute: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    ) { }

  ngOnInit() {
    this.zoom = 4;
    this.latitude = 10.9878;
    this.longitude =  -74.7889;
    
    this.ubicacion = new FormControl();
    
    //Poner la posicion
    this.setCurrentPosition();
    
    //autocompletado
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"],
        componentRestrictions: {'country': 'CO'}
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //obtener resultado del lugar
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          const lugar = place;
  
          //verificar resultado
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //poner latitude, longitude y zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  submitIncidencia(){
    this.incidenciaService.createIncidencia(this.incidencia,)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/incidencia']);
      },
      err => console.log(err)
      
      
    )
  }
}

