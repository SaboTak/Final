/// <reference types="@types/googlemaps" />

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule }    from '@angular/forms';


import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IncidenciaListComponent } from './components/incidencia-list/incidencia-list.component';
import { IncidenciaFormComponent } from './components/incidencia-form/incidencia-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgmCoreModule } from "@agm/core";

import { AlertComponent } from './_components/alert/alert.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IncidenciaListComponent,
    IncidenciaFormComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    RegisterComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCbRErAASMiowyIOiXpIivYskcjI2NNup8',
      libraries: ['places']
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
